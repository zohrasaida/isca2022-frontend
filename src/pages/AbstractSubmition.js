



  //  <div className='title'> <h1>Submission Form</h1></div>


import SideBarLeft from '../components/SideBar';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './AbstractSubmission.css';

function AbstractSubmission() {
  return (
    
       



    <Form>
      <Row>
        <Col>
          <Form.Control placeholder="First name"className="FirstName" />
        </Col>
        
      </Row>
      <Row>
        
        <Col>
          <Form.Control placeholder="Last name" className="LastName"/>
        </Col>
       
      </Row>
      <Row>
      <Button variant="primary" type="submit" className="Upload">
        Upload File
      </Button>
      </Row>
      <Row>
      <Button variant="primary" type="submit" className="Submit">
        Submit
      </Button>
      </Row>
      
    </Form>
    
  );
}

export default AbstractSubmission;