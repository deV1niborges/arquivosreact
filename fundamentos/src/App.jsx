import { FirstComponent } from "./component/FirstComponent";
import { TemplateExpressions } from "./component/TemplateExpressions";
import { MyComponent } from "./component/MyComponent";
import { Events } from "./component/Events";
import { Challenge } from "./desafios/Challenge";

export function App() {
  return (
    <div>
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
      <Challenge />
    </div>
  );
}
