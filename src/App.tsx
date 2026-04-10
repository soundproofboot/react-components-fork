import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PizzaToppings from './PizzaToppings';
import TsteeleComponent02 from './TsteeleComponent02';

const App = () => {

  return (
    <div
      className='m-3'
    >
      <h1>
        React Components
      </h1>
      <PizzaToppings />
      <TsteeleComponent02 />
    </div>
  );
}

export default App
