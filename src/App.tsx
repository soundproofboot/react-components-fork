import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import PizzaToppings from './PizzaToppings';
import Welcome from './Welcome';

const App = () => {

  return (
    <div
      className='m-3'
    >
      <h1>
        React Components
      </h1>
      <PizzaToppings />
      <Welcome />
    </div>
  );
}

export default App
