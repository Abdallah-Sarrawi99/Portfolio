import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Frontend Web Developer passionate about creating dynamic,
              user-friendly, and efficient web experiences. <br />
              With expertise in React.js, Next.js, JavaScript, TypeScript,
              HTML5, and CSS3, I specialize in crafting responsive and
              accessible websites that bring ideas to life. <br />
              My focus is on clean code, seamless user interfaces, and
              innovative solutions to complex challenges. Whether it's building
              modern front-end applications, developing interactive components,
              or optimizing performance, I bring dedication and creativity to
              every project. Feel free to explore my portfolio to see examples
              of my work, or reach out to collaborate!
              <br />
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
