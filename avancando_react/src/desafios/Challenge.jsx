import React from "react";
import UserDetails from "./UserDetails";

const Challenge = () => {
  const arraysOBJ = [
    { id: 1, nome: "Emili", idade: 20, profissao: "Administradora" },
    { id: 2, nome: "Vini", idade: 20, profissao: "Desenvolvedor" },
    { id: 3, nome: "Noelle", idade: 20, profissao: "Arquiteta" },
  ];
  return (
    <div>
      {arraysOBJ.map((arrayOBJ) => (
        <UserDetails
          key={arrayOBJ.id}
          nome={arrayOBJ.nome}
          idade={arrayOBJ.idade}
          profissao={arrayOBJ.profissao}
        />
      ))}
    </div>
  );
};

export default Challenge;
