import { useState } from "react";
import "./Input.css";

const Input = ({
  placeholder = "Enter text...",
  label = "Input",
  onChange,
}) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    // Call the onChange prop if provided
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input
        type="text"
        className="input-field"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
