import { useState } from "react";

export const ConditionalRender = () => {
  const [x] = useState(true);

  const [name, setName] = useState("Matheus");

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, SIM!</p>}
      {!x && <p>Agora se X for falso, NÃO</p>}
      {name === "Vinicius" ? (
        <div>
          <p>O nome é {name}</p>
        </div>
      ) : (
        <p>Nome não encontrado</p>
      )}
      <button onClick={() => setName("Vinicius")}>Clica aqui!</button>
    </div>
  );
};
