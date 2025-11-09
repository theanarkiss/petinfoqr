import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";

const petFormSchema = z.object({
  petName: z.string().min(1, "Pet's name is required"),
  phoneNumber: z.string().min(10, "Please enter a valid phone number"),
  address: z.string().min(5, "Address is required"),
  notes: z.string().optional(),
});

type PetFormData = z.infer<typeof petFormSchema>;

interface PetFormProps {
  onSubmit: (data: PetFormData) => void;
  isLoading?: boolean;
}

export default function PetForm({ onSubmit, isLoading = false }: PetFormProps) {
  const form = useForm<PetFormData>({
    resolver: zodResolver(petFormSchema),
    defaultValues: {
      petName: "",
      phoneNumber: "",
      address: "",
      notes: "",
    },
  });

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <Card className="w-full max-w-xl">
        <CardHeader className="text-center space-y-2">
          <div className="flex justify-center mb-2">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Heart className="h-6 w-6 text-primary" />
            </div>
          </div>
          <CardTitle className="text-3xl font-semibold">Create Pet Safety Tag</CardTitle>
          <CardDescription className="text-base">
            Generate a scannable QR code with your pet's contact information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="petName" className="text-sm font-medium">
                Pet's Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="petName"
                data-testid="input-pet-name"
                placeholder="Enter your pet's name"
                {...form.register("petName")}
                className="text-base"
              />
              {form.formState.errors.petName && (
                <p className="text-sm text-destructive" data-testid="error-pet-name">
                  {form.formState.errors.petName.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="text-sm font-medium">
                Phone Number <span className="text-destructive">*</span>
              </Label>
              <Input
                id="phoneNumber"
                data-testid="input-phone-number"
                type="tel"
                placeholder="(555) 123-4567"
                {...form.register("phoneNumber")}
                className="text-base"
              />
              {form.formState.errors.phoneNumber && (
                <p className="text-sm text-destructive" data-testid="error-phone-number">
                  {form.formState.errors.phoneNumber.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="text-sm font-medium">
                Address <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="address"
                data-testid="input-address"
                placeholder="123 Main Street, City, State ZIP"
                rows={3}
                {...form.register("address")}
                className="text-base resize-none"
              />
              {form.formState.errors.address && (
                <p className="text-sm text-destructive" data-testid="error-address">
                  {form.formState.errors.address.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes" className="text-sm font-medium">
                Additional Notes
              </Label>
              <Textarea
                id="notes"
                data-testid="input-notes"
                placeholder="Allergies, medications, behavioral notes..."
                rows={4}
                {...form.register("notes")}
                className="text-base resize-none"
              />
              <p className="text-sm text-muted-foreground">
                Include any important information about allergies, medications, or special needs
              </p>
            </div>

            <Button
              type="submit"
              data-testid="button-generate-qr"
              className="w-full"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? "Generating..." : "Generate QR Code"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
