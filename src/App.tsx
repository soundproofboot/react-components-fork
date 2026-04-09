import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PizzaToppings from './PizzaToppings';
import DweiseComponent from './DweiseAccordionComponent';

const App = () => {

  return (
    <div
      className='m-3'
    >
      <h1>
        React Components
      </h1>
      <PizzaToppings />
      <DweiseComponent></DweiseComponent>
    </div>
  );
}

export default App
