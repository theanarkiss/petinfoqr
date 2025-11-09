import { useLocation, useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import QRCodeDisplay from "@/components/QRCodeDisplay";
import { Card, CardContent } from "@/components/ui/card";

export default function QRCode() {
  const [, params] = useRoute("/qr/:id");
  const [, setLocation] = useLocation();

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
              This pet record could not be found.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const qrUrl = `${window.location.origin}/view/${params?.id}`;

  return (
    <QRCodeDisplay
      petData={petData}
      qrUrl={qrUrl}
      onCreateAnother={() => {
        setLocation("/");
      }}
      onEdit={() => {
        setLocation("/");
      }}
    />
  );
}
