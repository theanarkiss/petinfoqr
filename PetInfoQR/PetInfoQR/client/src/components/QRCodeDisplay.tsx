import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Plus, Pencil, Phone, MapPin, FileText } from "lucide-react";

interface PetData {
  petName: string;
  phoneNumber: string;
  address: string;
  notes?: string;
}

interface QRCodeDisplayProps {
  petData: PetData;
  qrUrl: string;
  onCreateAnother: () => void;
  onEdit: () => void;
}

export default function QRCodeDisplay({ petData, qrUrl, onCreateAnother, onEdit }: QRCodeDisplayProps) {
  const handleDownload = () => {
    const svg = document.getElementById("pet-qr-code");
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    canvas.width = 512;
    canvas.height = 512;

    img.onload = () => {
      ctx?.drawImage(img, 0, 0, 512, 512);
      const pngFile = canvas.toDataURL("image/png");
      
      const downloadLink = document.createElement("a");
      downloadLink.download = `${petData.petName.replace(/\s+/g, "-")}-qr-code.png`;
      downloadLink.href = pngFile;
      downloadLink.click();
    };

    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-xl font-semibold">Your Pet's QR Code</CardTitle>
              <CardDescription>
                Print this code for your pet's collar or tag
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <div className="bg-white p-6 rounded-lg">
                <QRCodeSVG
                  id="pet-qr-code"
                  value={qrUrl}
                  size={256}
                  level="H"
                  data-testid="qr-code"
                />
              </div>
              <Button
                onClick={handleDownload}
                data-testid="button-download-qr"
                className="w-full"
                size="lg"
              >
                <Download className="h-4 w-4 mr-2" />
                Download QR Code
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Pet Information</CardTitle>
              <CardDescription>
                This information will be displayed when someone scans the QR code
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-muted-foreground">Pet's Name</p>
                    <p className="text-base font-semibold" data-testid="text-pet-name">
                      {petData.petName}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-muted-foreground">Phone Number</p>
                    <p className="text-base font-semibold" data-testid="text-phone-number">
                      {petData.phoneNumber}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-muted-foreground">Address</p>
                    <p className="text-base" data-testid="text-address">
                      {petData.address}
                    </p>
                  </div>
                </div>

                {petData.notes && (
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-md bg-destructive/10 flex items-center justify-center shrink-0">
                      <FileText className="h-4 w-4 text-destructive" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-muted-foreground">Important Notes</p>
                      <p className="text-base" data-testid="text-notes">
                        {petData.notes}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-2 pt-2">
                <Button
                  onClick={onEdit}
                  data-testid="button-edit"
                  variant="outline"
                  className="flex-1"
                >
                  <Pencil className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <Button
                  onClick={onCreateAnother}
                  data-testid="button-create-another"
                  variant="secondary"
                  className="flex-1"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Create Another
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
