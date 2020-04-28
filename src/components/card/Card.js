import React from "react";
import { Card as BCard, Button, ListGroup, Row, Col } from "react-bootstrap";
import styles from "./styles.scss";

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <BCard bg="secondary">
        <BCard.Img variant="top" src={profile.avatar_url} alt="" />
        <BCard.Body>
          <BCard.Title className="name">{profile.name}</BCard.Title>
          <ListGroup variant="flush">
            <ListGroup.Item className="">
              Username: {profile.login}
            </ListGroup.Item>
            <ListGroup.Item>Position: {profile.company}</ListGroup.Item>
            <ListGroup.Item>
              <Row className="labels">
                <Col>Repos</Col>
                <Col>Followers</Col>
                <Col>Following</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>{profile.followers}</Col>
                <Col>{profile.following}</Col>
                <Col>{profile.public_repos}</Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
          <Button variant="primary">Go somewhere</Button>
        </BCard.Body>
      </BCard>
    );
  }
}

export default Card;
