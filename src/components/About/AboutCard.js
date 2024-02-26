import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">JJ Munguia </span>
            from <span className="purple"> Wausau,Wi.</span>
            <br />
            I am currently employed as a general maintenance technician at Granite Peak Ski Area.
            <br />
            There I'm responsible for the maintenance and repair of the ski lifts, snow making equipment, and the general upkeep of the resort.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Spending time with my family
            </li>
            <li className="about-activity">
              <ImPointRight /> Working on my Home Lab
            </li>
            <li className="about-activity">
              <ImPointRight /> 3d Printing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Any sufficiently advanced technology is indistinguishable from magic."{" "}
          </p>
          <footer className="blockquote-footer">Arthur C. Clarke</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
