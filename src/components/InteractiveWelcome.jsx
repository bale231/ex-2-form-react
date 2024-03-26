import { Welcome } from "./Welcome";
import { useState } from "react";

export function InteractiveWelcome() {
  const [nameHello, setNameHello] = useState("");
  function setName(event) {
    const valueInput = event.target.value;
    setNameHello(valueInput);
  }

  return (
    <>
      <input onChange={setName} type="text" value={nameHello} />
      <Welcome name={nameHello} />
    </>
  );
}
