import React from "react";

const UserDetails = ({ nome, idade, profissao }) => {
  // let message;  //posso usar tanto if e else ou um operador ternário

  // if (idade >= 18) {
  //  message = <p>Pode tirar carteira de habilitação</p>;
  // } else {
  //  message = <p>Menor de idade</p>;
  // }
  return (
    <div>
      <h1>{nome}</h1>
      <p>Idade: {idade}</p>
      <p>Profissao: {profissao}</p>
      {/* {message} */}
      {idade >= 18 ? (
        <p>Pode tirar carteira de habilitação</p>
      ) : (
        <p>Menor de idade</p>
      )}
    </div>
  );
};

export default UserDetails;
