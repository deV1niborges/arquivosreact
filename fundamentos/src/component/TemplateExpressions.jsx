export const TemplateExpressions = () => {
  const name = "Vini";
  const data = {
    age: 31,
    job: "Programmmer",
  };

  return (
    <div>
      <h1>Olá, {name} tudo bem?</h1>
      <p>Você atua como: {data.job}</p>
      <p>{4 + 4}</p>
      <p>{console.log("JSX React")}</p>
    </div>
  );
};
