import { useState } from "react";

export const ConditionalRender = () => {
  const [x] = useState(true);
  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, SIM!</p>}
      {!x && <p>Agora se X for falso, NÃO</p>}
    </div>
  );
};
