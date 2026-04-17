import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PizzaToppings from "./PizzaToppings";
import TsteeleComponent from "./TsteeleComponent";
import Welcome from "./Welcome";
import ThamiltonComponent from "./ThamiltonComponent";
import DweiseComponent from './DweiseAccordionComponent';


const App = () => {
  return (
    <div className="m-3">
      <h1>React Components</h1>
      <PizzaToppings />
      <TsteeleComponent />
      <Welcome />
      <ThamiltonComponent />
      <DweiseComponent />
    </div>
  );
};

export default App;
