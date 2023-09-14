import React, { useState } from "react";

//Componente que proporciona la logica para poder ser reutilizada en muchos componentes
const withToggle = (Component) => {
  const WrappedComponent = (props) => {
    const [show, setShow] = useState(false);

    const handleChange = () => {
      setShow(!show);
    };
    return <Component handle={handleChange} show={show} {...props} />;
  };

  return WrappedComponent;
};

//Componente que va a recibir la Logica
const ToggleHOC = ({ children, handle, show }) => {
  return (
    <div>
      <button onClick={handle}>Mostrar contenido</button>
      {show && children}
    </div>
  );
};

export const ToggleHOCwithToggle = withToggle(ToggleHOC);
