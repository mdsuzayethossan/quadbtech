import Button from "react-bootstrap/Button";
import React from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
const InfoCard = ({ info }) => {
  const navigate = useNavigate();
  const { show } = info;
  const { url, name, image, schedule } = show;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={image.medium} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <b>Schedule:</b>
            Days: <span>{schedule?.days.map((day) => day)}</span> | Time:
            <span>{(schedule?.time && schedule.time) || "--"}</span>
          </Card.Text>
          <Button
            onClick={() => navigate("/show-more", { state: { info } })}
            variant="primary"
          >
            Show More
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default InfoCard;
