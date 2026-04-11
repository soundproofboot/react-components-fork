import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"
import { dummyPizzaToppingsFromApi } from "./dummy-pizza-toppings";

const PizzaToppings = () => {
    // React hooks here
    const [availableToppings, setAvailableToppings] = useState(
        dummyPizzaToppingsFromApi.map(topping => ({
            ...topping,
            checked: false,
        }))
    )

    // Calculate derived state
    const total = availableToppings
        .filter(topping => topping.checked)
        .reduce((acc, topping) => acc + topping.price, 0)
    ;

    // Return JSX
    return (
        <Card>
            <Card.Body>
                <Card.Title>Choose your pizza toppings...</Card.Title>
                <div className="my-3">
                    <Button onClick={
                                () => setAvailableToppings(
                                    availableToppings.map(topping => ({
                                        ...topping,
                                        checked: true,
                                    }))
                                )
                            }
                            variant="outline-primary"
                    >
                        All
                    </Button>
                    <Button className="ms-2" 
                            onClick={
                                () => setAvailableToppings(
                                    availableToppings.map(topping => ({
                                        ...topping,
                                        checked: false,
                                    }))
                                )
                            }
                            variant="outline-primary"
                    >
                        None
                    </Button>
                </div>

                {
                    availableToppings.map(
                        topping => (<div>{`${topping.name} ($${topping.price.toFixed(2)})`}</div>)
                    )
                }

                <h3 className="mt-3">Total: {`$${total.toFixed(2)}`}</h3>
            </Card.Body>
        </Card>
    );
};

export default PizzaToppings;
