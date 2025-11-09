import QRCodeDisplay from "../QRCodeDisplay";

export default function QRCodeDisplayExample() {
  const mockPetData = {
    petName: "Max",
    phoneNumber: "(555) 123-4567",
    address: "123 Main Street, Springfield, IL 62701",
    notes: "Allergic to chicken. Takes medication twice daily.",
  };

  return (
    <QRCodeDisplay
      petData={mockPetData}
      qrUrl="https://example.com/pet/abc123"
      onCreateAnother={() => console.log("Create another clicked")}
      onEdit={() => console.log("Edit clicked")}
    />
  );
}
