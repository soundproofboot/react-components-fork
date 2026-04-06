import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const CBaresComponent = () => {
    return (
        <Card
            className="my-3"
        >
            <Card.Body>
                <Card.Title>
                    Colin's Component
                </Card.Title>
                    <Form>
                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="Check this switch"
                        />
                        <Form.Check // prettier-ignore
                            disabled
                            type="switch"
                            label="disabled switch"
                            id="disabled-custom-switch"
                        />
                    </Form>
            </Card.Body>
        </Card>
    );
};

export default CBaresComponent;