import { useState } from "react";

export const ListRender = () => {
  const [list] = useState(["Vinicius", "Matheus", "Josias", "Maria"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Arthur", age: 20 },
    { id: 2, name: "João", age: 30 },
    { id: 3, name: "Pedro", age: 25 },
  ]);

  const deleteRadom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((users) => randomNumber !== users.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((users) => (
          <li key={users.id}>
            {users.name} - {users.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRadom}>Delete random user</button>
    </div>
  );
};
