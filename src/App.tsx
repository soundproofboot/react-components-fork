import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PizzaToppings from './PizzaToppings';
import TsteeleComponent from "./TsteeleComponent";
import Welcome from "./Welcome";
import ThamiltonComponent from "./ThamiltonComponent";
import DweiseComponent from './DweiseAccordionComponent';
import CBaresComponent from './CBaresComponent';
import ZsmuckerbryanComponent from './ZsmuckerbryanComponent';


const App = () => {
  return (
    <div className="m-3">
      <h1>React Components</h1>
      <PizzaToppings />
      <TsteeleComponent />
      <Welcome />
      <ThamiltonComponent />
      <DweiseComponent />
      <CBaresComponent />
      <ZsmuckerbryanComponent />
    </div>
  );
};

export default App;
