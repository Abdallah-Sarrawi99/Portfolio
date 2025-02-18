import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <strong className="purple ">Abdallah Sarrawi</strong>, a web
            developer with a background in{" "}
            <strong className="purple">electrical engineering.</strong> My
            journey into the tech world began with a deep passion for
            problem-solving and creating seamless digital experiences. To build
            a strong foundation, I took self-learning courses on Udemy in{" "}
            <strong className="purple ">
              JavaScript, HTML5, CSS3, Data Structures, React, and Next.js,
            </strong>{" "}
            which equipped me with the skills to dive into web development.
            <br />
            <br /> To further hone my skills, I joined{" "}
            <strong className="purple ">TAP Company</strong>, an intensive and
            highly selective web development program. After graduating, I had
            the privilege of working with{" "}
            <strong className="purple ">TAP as an intern</strong>, where I
            contributed to real-world projects and gained invaluable hands-on
            experience in the field.
            <br />
            <br /> With a strong analytical mindset and a drive for innovation,
            I’m passionate about building efficient, scalable, and user-focused
            solutions. I’m always excited to learn, grow, and tackle new
            challenges. Let’s create something amazing together! 🚀
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>

            <li className="about-activity">
              <ImPointRight /> Hanging out with friends
            </li>
          </ul> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
