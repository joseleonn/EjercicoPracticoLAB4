//Componente que proporciona la logica para poder ser reutilizada en muchos componentes

import { useState } from "react";

const withToggleTip = (Component) => {
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
const ToggleTipHOC = ({ children, handle, show }) => {
  return (
    <div>
      <h2 onMouseOver={handle}>
        Pase el cursor por encima para ver el mensaje (HOC)
      </h2>
      {show && children}
    </div>
  );
};

//aca le pasamos la logica de la funcion HOC a el componente ToggleTipHoc
export const ToggleTipHOCwithToggle = withToggleTip(ToggleTipHOC);
