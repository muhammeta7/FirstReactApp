import React from "react";
import Card from "../card/Card";
import { Row, Col, Container } from "react-bootstrap";

const CardList = (props) => (
  <Container>
    <Row>
      {props.profiles.map((profile) => (
        <Col xs={4} key={profile.id}>
          <Card {...profile} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default CardList;
