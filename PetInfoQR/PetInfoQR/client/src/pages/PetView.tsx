import { useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import PetInfoView from "@/components/PetInfoView";
import { Card, CardContent } from "@/components/ui/card";

export default function PetView() {
  const [, params] = useRoute("/view/:id");

  const { data: petData, isLoading, error } = useQuery<any>({
    queryKey: ["/api/pets", params?.id],
    enabled: !!params?.id,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <Card className="max-w-md w-full">
          <CardContent className="p-12 text-center">
            <p className="text-muted-foreground">Loading...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error || !petData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <Card className="max-w-md w-full">
          <CardContent className="p-12 text-center">
            <p className="text-lg font-medium mb-2">Pet Not Found</p>
            <p className="text-muted-foreground">
              This QR code may be invalid or the pet information is no longer available.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <PetInfoView petData={petData} />;
}
