import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CBaresComponent from './CBaresComponent';
import PizzaToppings from './PizzaToppings';
import TsteeleComponent from "./TsteeleComponent";
import Welcome from "./Welcome";
import ThamiltonComponent from "./ThamiltonComponent";
import DweiseComponent from './DweiseAccordionComponent';
import ZsmuckerbryanComponent from './ZsmuckerbryanComponent';


const App = () => {
  return (
    <div className="m-3">
      <h1>React Components</h1>
      <CBaresComponent />
      <PizzaToppings />
      <TsteeleComponent />
      <Welcome />
      <ThamiltonComponent />
      <DweiseComponent />
      <ZsmuckerbryanComponent />
    </div>
  );
};

export default App;
