import { useState } from "react";

const Input = ({ handleSearch }) => {
  const [zip, setZip] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a ZIP"
        value={zip}
        onChange={(e) => setZip(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter'){
            handleSearch(zip)
          }
        }}
      />
      <input
        style={{ height: "1.4rem" }}
        type="button"
        value="Go"
        disabled={zip.trim() === ""}
        onClick={() => handleSearch(zip)}
      />
    </div>
  );
};

export default Input;
