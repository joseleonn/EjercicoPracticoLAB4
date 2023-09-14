import { useState } from "react";
import "./App.css";
import Toggle from "./components/ToggleRenderProps";
import { ToggleHOCwithToggle } from "./components/ToggleHOC";
import ToggleTipRenderProps from "./components/ToggleTipRenderProps";
import { ToggleTipHOCwithToggle } from "./components/ToggleTipHOC";

function App() {
  return (
    <div>
      {/* Toggle con Render Props */}
      <h2>Toggle con Render Props</h2>
      <Toggle>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit quia
          iusto ad laborum, natus repudiandae quas, nobis aliquam explicabo
          officia laudantium dignissimos eligendi iste placeat, asperiores cum
          in cumque deleniti.
        </p>
      </Toggle>
      <h2>Toggle con Hoc</h2>

      <ToggleHOCwithToggle>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit quia
          iusto ad laborum, natus repudiandae quas, nobis aliquam explicabo
          officia laudantium dignissimos eligendi iste placeat, asperiores cum
          in cumque deleniti.
        </p>
      </ToggleHOCwithToggle>

      <ToggleTipRenderProps>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          expedita accusantium inventore officia eveniet repudiandae corrupti
          maxime tempora voluptates illum sint veniam mollitia quibusdam ipsa
          odit consequatur. Veniam, beatae doloribus?
        </p>
      </ToggleTipRenderProps>

      <ToggleTipHOCwithToggle>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit quia
          iusto ad laborum, natus repudiandae quas, nobis aliquam explicabo
          officia laudantium dignissimos eligendi iste placeat, asperiores cum
          in cumque deleniti.
        </p>
      </ToggleTipHOCwithToggle>
    </div>
  );
}

export default App;
