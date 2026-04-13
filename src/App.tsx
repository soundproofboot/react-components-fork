import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/*
The below line of code is the better way to write it since the function has only the one, small thing it's returning.
const PizzaToppings = () => <h2>Choose your pizza toppings...</h2>;
*/
// But this way (notice the curly brackets, and return keyword) would allow for more lines of code to be executed upon calling the PizzaToppings function
const PizzaToppings = () => {
  return <h2>Choose your pizza toppings...</h2>;
};
const App = () => {
  return (
    <div className="m-3">
      <h1>React Components</h1>
      <PizzaToppings />
    </div>
  );
};

export default App;
