import { useState } from "react";
import { useLocation } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import PetForm from "@/components/PetForm";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const createPetMutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await apiRequest("POST", "/api/pets", data);
      return await res.json();
    },
    onSuccess: (pet: any) => {
      setLocation(`/qr/${pet.id}`);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to create pet record. Please try again.",
        variant: "destructive",
      });
      console.error("Error creating pet:", error);
    },
  });

  const handleSubmit = async (data: any) => {
    createPetMutation.mutate(data);
  };

  return <PetForm onSubmit={handleSubmit} isLoading={createPetMutation.isPending} />;
}
