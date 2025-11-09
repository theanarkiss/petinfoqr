import PetInfoView from "../PetInfoView";

export default function PetInfoViewExample() {
  const mockPetData = {
    petName: "Bella",
    phoneNumber: "(555) 987-6543",
    address: "456 Oak Avenue, Portland, OR 97201",
    notes: "Allergic to bee stings - requires immediate veterinary attention if stung.\n\nTakes heart medication daily.\n\nFriendly but may be scared if lost.",
  };

  return <PetInfoView petData={mockPetData} />;
}
