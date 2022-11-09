






import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


function AbstractSubmission() {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Form.Control placeholder="Last name" />
        </Col>
      </Row>
      <Row>
      <Button variant="primary" type="submit">
        Upload File
      </Button>
      </Row>
      <Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Row>
    </Form>
  );
}

export default AbstractSubmission;