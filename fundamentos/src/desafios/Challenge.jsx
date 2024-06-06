export const Challenge = () => {
  let num1 = 10;
  let num2 = 16;

  return (
    <div>
      <p>Número 1: {num1}</p>
      <p>Número 2: {num2}</p>
      <button
        onClick={() => {
          console.log(num1 + num2);
        }}
      >
        Clique para soma no console dos números
      </button>
    </div>
  );
};
