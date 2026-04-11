import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import reactLogo from './assets/react.svg';
import PizzaToppings from './PizzaToppings';

const App = () => {

  return (
    <div
      className='m-3'
    >
      <h1>
        <img src={reactLogo} alt="React Logo" />React Components
      </h1>
      <PizzaToppings />
    </div>
  );
}

export default App
