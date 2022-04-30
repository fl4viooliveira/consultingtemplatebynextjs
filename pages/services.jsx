import React from "react";
import Image from "next/image";
import Image1 from "./images/2.png";
import { Container, Row, Col } from "react-bootstrap";
export default function Services() {
  return (
    <>
      <Container>
        <Row className="center container-height">
          <Col md={6} sm={12}>
            <Image src={Image1} alt="Picture of the author" />
          </Col>
          <Col md={6} sm={12}>
            <div className="text-container">
              <h2>We offer the below services:</h2>
              <>
                <ul>
                  <li>
                    <span>Build static and dynamic responsive website&nbsp;</span>
                  </li>
                  <li>
                    <span>Enterprise grade REST APIs develop using Java or node.Js technologies.</span>
                  </li>
                  <li>
                    <span>Write Technical Blogs on multiple sites</span>
                  </li>
                  <li>
                    <span>Create ChatBots for conversational requirements with apis</span>
                  </li>
                </ul>
              </>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}