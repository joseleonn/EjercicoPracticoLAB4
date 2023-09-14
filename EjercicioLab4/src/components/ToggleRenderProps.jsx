import React, { useState } from "react";

const Toggle = ({ children }) => {
  const [show, setShow] = useState(false);
  const handleChange = () => {
    setShow(!show);
    console.log(show);
  };
  return (
    <div>
      <button onClick={handleChange}>Mostrar contenido</button>
      {show && children}
    </div>
  );
};

export default Toggle;
