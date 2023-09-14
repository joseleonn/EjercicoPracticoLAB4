import React, { useState } from "react";

const ToggleTipRenderProps = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleChange = () => {
    setShow(!show);
  };
  return (
    <div>
      <h2 onMouseOver={handleChange}>
        Pase el cursor por encima para ver el mensaje (RenderProps)
      </h2>
      {show && children}
    </div>
  );
};

export default ToggleTipRenderProps;
