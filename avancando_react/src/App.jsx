import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import City from "./assets/city.jpg";
import { ManageData } from "./components/ManageData";
import { ListRender } from "./components/ListRender";
import { ConditionalRender } from "./components/ConditionalRender";

export function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em assets*/}
      <div>
        <img src={City} alt="Paisagem" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
    </div>
  );
}
