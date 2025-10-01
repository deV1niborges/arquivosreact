import "./App.css";
import City from "./assets/city.jpg";
import { ManageData } from "./components/ManageData";
import { ListRender } from "./components/ListRender";
import { ConditionalRender } from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import React from "react";
import { useState } from "react";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./desafios/UserDetails";
import Challenge from "./desafios/Challenge";

export function App() {
  // const name = "Joaquim";
  const [userName] = useState("Maria");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Cinza", newCar: false, km: 34343 },
    { id: 3, brand: "Renault", color: "Preto", newCar: false, km: 234 },
  ];

  // const arraysOBJ = [
  //   { id: 1, nome: "Emili", idade: 20, profissao: "Administradora" },
  //   { id: 2, nome: "Vini", idade: 20, profissao: "Desenvolvedor" },
  //   { id: 3, nome: "Noelle", idade: 20, profissao: "Arquiteta" },
  // ];

  function showMessage() {
    console.table("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => setMessage(msg);

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
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      {/* reaproveitamento */}
      <CarDetails brand="Ford" km={0} color="Vermelha" newCar={true} />
      <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false} />
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/* fragments */}
      <Fragment propFragment="teste" />
      {/* container */}
      <Container myValue="testing">
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue="testing2">
        <h5>Testando container</h5>
      </Container>
      {/* execução da função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/* desafio */}
      <Challenge />
    </div>
  );
}
