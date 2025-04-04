import React from "react";

const UserDetails = ({ nome, idade, profissao }) => {
  return (
    <div>
      <h1>{nome}</h1>
      <p>Idade: {idade}</p>
      <p>Profissao: {profissao}</p>
      {idade >= 18 ? (
        <p>Pode tirar carteira de habilitação</p>
      ) : (
        <p>Menor de idade</p>
      )}
    </div>
  );
};

export default UserDetails;
