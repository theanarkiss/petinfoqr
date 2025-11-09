import PetForm from "../PetForm";

export default function PetFormExample() {
  return (
    <PetForm
      onSubmit={(data) => {
        console.log("Form submitted:", data);
      }}
      isLoading={false}
    />
  );
}
