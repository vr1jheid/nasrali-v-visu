import { Step } from "./Components/Step";
import { response } from "./data";
import "./App.css";

export const App = () => {
  return (
    <div style={{ margin: "0 auto", width: 1200 }}>
      {response.data.map((step) => (
        <Step key={step.id} {...step} />
      ))}
    </div>
  );
};
