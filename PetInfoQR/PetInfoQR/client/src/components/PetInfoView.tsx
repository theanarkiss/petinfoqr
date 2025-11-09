import { Phone, MapPin, AlertCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface PetData {
  petName: string;
  phoneNumber: string;
  address: string;
  notes?: string;
}

interface PetInfoViewProps {
  petData: PetData;
}

export default function PetInfoView({ petData }: PetInfoViewProps) {
  const handleCall = () => {
    window.location.href = `tel:${petData.phoneNumber}`;
  };

  const handleMap = () => {
    const encodedAddress = encodeURIComponent(petData.address);
    window.open(`https://maps.google.com/?q=${encodedAddress}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground py-8 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Heart className="h-8 w-8" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold mb-2" data-testid="text-pet-name-title">
            {petData.petName}
          </h1>
          <p className="text-lg opacity-90">Lost Pet Information</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-8 space-y-4">
        <Card>
          <CardContent className="p-6">
            <Button
              onClick={handleCall}
              data-testid="button-call-owner"
              size="lg"
              className="w-full text-lg"
            >
              <Phone className="h-5 w-5 mr-3" />
              Call Owner: {petData.phoneNumber}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-semibold mb-2">Home Address</h2>
                <p className="text-lg mb-4" data-testid="text-address-full">
                  {petData.address}
                </p>
                <Button
                  onClick={handleMap}
                  data-testid="button-open-map"
                  variant="outline"
                  className="w-full"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Open in Maps
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {petData.notes && (
          <Card className="border-destructive/50 bg-destructive/5">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                  <AlertCircle className="h-6 w-6 text-destructive" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-semibold mb-2">Important Information</h2>
                  <p className="text-lg whitespace-pre-wrap" data-testid="text-notes-full">
                    {petData.notes}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="text-center pt-8 pb-4">
          <p className="text-sm text-muted-foreground">
            Thank you for helping reunite {petData.petName} with their owner
          </p>
        </div>
      </div>
    </div>
  );
}
