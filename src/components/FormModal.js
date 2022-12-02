import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function FormModal(props) {
  const { show } = props.info;
  const { url, name, language, premiered, average } = show;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>
          <a href={url}>Visit</a>
        </h4>
        <p>
          Language: {language} | premiered: {premiered} | Rating:{" "}
          {(average && average) || "--"}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button>Book Now</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default FormModal;
