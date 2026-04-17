import { Badge, Card } from "react-bootstrap";

const TsteeleComponent = () => {
    
    return (
        <Card
            className="my-3"
        >
            <Card.Body>
                <Card.Title>
                    Tom's Component
                </Card.Title>
                <div>
                    <h1>
                        Example heading <Badge bg="secondary">New</Badge>
                    </h1>
                    <h2>
                        Example heading <Badge bg="secondary">New</Badge>
                    </h2>
                    <h3>
                        Example heading <Badge bg="secondary">New</Badge>
                    </h3>
                    <h4>
                        Example heading <Badge bg="secondary">New</Badge>
                    </h4>
                    <h5>
                        Example heading <Badge bg="secondary">New</Badge>
                    </h5>
                    <h6>
                        Example heading <Badge bg="secondary">New</Badge>
                    </h6>
                </div>
            </Card.Body>
        </Card>
    );
};

export default TsteeleComponent;
