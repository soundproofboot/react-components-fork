import { Card } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

const TsteeleComponent02 = () => {
  return (
    <Card>
        <Card.Body>
            <Card.Title
                className='mb-3'
            >
                Tom's Second Component
            </Card.Title>
            <Spinner animation="border" variant="primary" />
            <Spinner animation="border" variant="secondary" />
            <Spinner animation="border" variant="success" />
            <Spinner animation="border" variant="danger" />
            <Spinner animation="border" variant="warning" />
            <Spinner animation="border" variant="info" />
            <Spinner animation="border" variant="light" />
            <Spinner animation="border" variant="dark" />
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="light" />
            <Spinner animation="grow" variant="dark" />
        </Card.Body>
    </Card>
  );
}

export default TsteeleComponent02;