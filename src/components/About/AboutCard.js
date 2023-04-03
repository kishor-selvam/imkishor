import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kishor </span>
            from <span className="purple"> Tamilnadu, India.</span> <br /> <br /> <hr />
            <br />I am a Entry-Level Full Stack Developer with Passion for Building Robust and Scalable Web Applications.
            <br />
            <br />
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Kishor</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
