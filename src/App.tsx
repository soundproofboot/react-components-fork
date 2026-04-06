import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const PizzaToppings = () => {
  return (
    <h2>
      Choose your pizza toppings...
    </h2>
  )
};

const App = () => {

  return (
    <div
      className="m-3"
    >
      <h1>
        React Components
      </h1>
      <PizzaToppings />
    </div>
  )
}

export default App
