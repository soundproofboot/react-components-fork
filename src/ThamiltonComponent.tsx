import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

const MyComponent = () => {
  return (
    <Card className="my-3">
      <Card.Body>
        <Card.Title>Tim's Carousel Component</Card.Title>
        <Carousel fade>
          <Carousel.Item
            interval={1500}
            style={{ height: "200px", backgroundColor: "#f8f9fa" }}
          >
            <Carousel.Caption style={{ position: "static", color: "#000" }}>
              <h4>First Slide Label</h4>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            interval={200}
            style={{ height: "200px", backgroundColor: "#f8f9fa" }}
          >
            <Carousel.Caption style={{ position: "static", color: "#000" }}>
              <h4>Second slide label</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            interval={5000}
            style={{ height: "200px", backgroundColor: "#f8f9fa" }}
          >
            <Carousel.Caption style={{ position: "static", color: "#000" }}>
              <h4>Third slide label</h4>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Card.Body>
    </Card>
  );
};

export default MyComponent;
