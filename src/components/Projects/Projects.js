import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import hiringTAP from "../../Assets/Projects/hiringwithTAP.png";
import learningResources from "../../Assets/Projects/learningResources.png";

import webTopics from "../../Assets/Projects/webTopicsproject.png";

import dicegame from "../../Assets/Projects/dicegame.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hiringTAP}
              isBlog={false}
              title="Pages Developed During My TAP Internship"
              description="During my internship at TAP Company, I worked on several web pages, contributing to real-world projects. I was responsible for building user-friendly interfaces, implementing interactive features, and ensuring smooth functionality, and here's one of these pages"
              demoLink="https://www.tapcareers.io/for-employers/hiring-with-tap"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={learningResources}
              isBlog={false}
              title="Pages Developed During My TAP Internship"
              description="During my internship at TAP Company, I worked on several web pages, contributing to real-world projects. I was responsible for building user-friendly interfaces, implementing interactive features, and ensuring smooth functionality, and here's one of these pages"
              demoLink="https://www.tapcareers.io/resources-and-events/free-learning-resources"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webTopics}
              isBlog={false}
              title="Bits-0f-C0de"
              description="Web Topics is a website built during my time at the TAP course, using Vanilla JavaScript, HTML, and CSS. It showcases various web development technologies and frameworks, allowing users to filter by search, author, and technology type for easy exploration. after that we implemented the project using React.js"
              ghLink="https://github.com/JSD-0423/Abdallah-Sarrawi"
              demoLink="https://jsd-0423.github.io/Abdallah-Sarrawi/"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dicegame}
              isBlog={false}
              title="Dice-Game"
              description="This is a simple two-player dice game built with Vanilla JavaScript, HTML, and CSS. Players take turns rolling a dice, with the option to hold their score to end their turn or roll again for a higher total. However, if a player rolls a 0, their turn immediately ends, and the other player takes over. The game continues until one player reaches 100 points or more, declaring them the winner."
              ghLink="https://github.com/Abdallah-Sarrawi99/Dice-Game"
              demoLink="https://dicegame99.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
