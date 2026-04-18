import { Card, Form } from "react-bootstrap";

const ZsmuckerbryanComponent = () => {
  return(
    <Card
    className="my-3"
    >
        <Card.Body>
            <Card.Title>
                Zac's Component
            </Card.Title>

            <Form.Label>Temperature Range</Form.Label>
            <Form.Range 
            min="0 degrees"
            max="800 degrees"
            />

        </Card.Body>
    </Card>
  );
};

export default ZsmuckerbryanComponent;