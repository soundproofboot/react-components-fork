import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { dummyPizzaToppingsFromApi } from "./dummy-pizza-toppings";
import Form from "react-bootstrap/Form";

const PizzaToppings = () => {
  //
  // React hooks...
  //
  const [availablePizzaToppings, setAvailablePizzaToppings] = useState(
    dummyPizzaToppingsFromApi.map(
        x => ({
            ...x,
            checked: false,
        })
    )
  );

  //
  // Calculate derived state, and other code...
  //
  const total = availablePizzaToppings
    .filter(
        x => x.checked,
    )
    .reduce(
        (acc, x) => acc + x.price,
        0,
    )
  ;

  //
  // Return JSX...
  //
  return (
    <Card>
        <Card.Body>
            <Card.Title
                className="mb-3"
            >
                Choose your pizza toppings...
            </Card.Title>
            <Button
                variant="outline-primary"
                onClick={
                    () => setAvailablePizzaToppings(
                        availablePizzaToppings.map(
                            x => ({
                                ...x,
                                checked: true,
                            })
                        )
                    )
                }
            >
                All
            </Button>
            <Button
                className="ms-2"
                variant="outline-primary"
                onClick={
                    () => setAvailablePizzaToppings(
                        availablePizzaToppings.map(
                            x => ({
                                ...x,
                                checked: false,
                            })
                        )
                    )
                }
            >
                None
            </Button>
            <Form>
                {
                    availablePizzaToppings.map(
                        x => (
                            <Form.Check
                                key={x.name}
                                id={x.name}
                                label={`${x.name} ($${x.price.toFixed(2)})`}
                                checked={x.checked}
                                onChange={
                                    () => setAvailablePizzaToppings(
                                        availablePizzaToppings.map(
                                            y => ({
                                                ...y,
                                                checked: y === x
                                                    ? !y.checked
                                                    : y.checked
                                            })
                                        )
                                    )
                                }
                                className="my-2"
                            >
                            </Form.Check>
                        )
                    )
                }
            </Form>
            <h3>
                Total: {
                    `$${total.toFixed(2)}`
                }
            </h3>
        </Card.Body>

    </Card>
  );
};

export default PizzaToppings;