import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Header from "./components/Header/Header";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
    console.log("Input value:", value);
  };

  return (
    <>
      <Header />
      <div style={{ padding: "20px" }}>
        <h2>Input Component Demo</h2>
        <Input
          label="User Input"
          placeholder="Type something..."
          onChange={handleInputChange}
        />
        <p>Current value: {inputValue}</p>
        <Button />
      </div>
    </>
  );
}

export default App;
