import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import FormModal from "../components/FormModal";
const ShowMore = () => {
  const location = useLocation();
  const { show } = location.state.info;
  const { url, name, image, summary } = show;
  const [modalShow, setModalShow] = useState(false);
  return (
    <Container className="mt-5">
      <Row xs={1} className="g-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Text>{summary.replace(/(<([^>]+)>)/gi, "")}</Card.Text>
              <Button variant="primary" onClick={() => setModalShow(true)}>
                Book ticket
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <FormModal
        show={modalShow}
        info={location.state.info}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
};

export default ShowMore;
