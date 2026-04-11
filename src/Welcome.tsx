import { useRef } from "react";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
0
const Welcome = () => {
    const name = useRef<HTMLInputElement | null>(null);
    const [welcomeMessage, setWelcomeMessage] = useState("");

    return (
        <Card className="mt-3">
            <Card.Body>
                <Card.Title className="mb-4">Welcome from an Input Group</Card.Title>

                <InputGroup className="mb-4">
                    <InputGroup.Text>Name:</InputGroup.Text>
                    <Form.Control className="w-25" id="name" ref={name} type="text"></Form.Control>
                </InputGroup>

                <Button onClick={
                            () => setWelcomeMessage(`Hello, ${name.current.value}!`)                             
                        }
                        variant="outline-primary"
                >
                    Enter
                </Button>
                <Button className="ms-2" 
                        onClick={
                            () => setWelcomeMessage("")
                        }
                        variant="outline-secondary"
                >
                    Reset
                </Button>

                <span className="ms-5">{`${welcomeMessage}`}</span>
            </Card.Body>
        </Card>
    );
};

export default Welcome;