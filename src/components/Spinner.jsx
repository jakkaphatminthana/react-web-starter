import { BeatLoader } from "react-spinners";

function Spinner({ isLoading }) {
  return (
    <BeatLoader
      loading={isLoading}
      color="#3b82f6"
      size={20}
      cssOverride={{ margin: "48px", textAlign: "center" }}
    />
  );
}

export default Spinner;
