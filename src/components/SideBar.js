

import './SideBar.css';
import ListGroup from 'react-bootstrap/ListGroup';
//hover on word underline done
function SideBarLeft() {
  return (
    <div class="SideBar">
    <ListGroup>
      <ListGroup.Item ><text class="txt"> HOME</text> </ListGroup.Item>
      <ListGroup.Item ><text class="txt"> INVITED SPEAKERS</text></ListGroup.Item>
      <ListGroup.Item ><text class="txt"> IMPORTANT DATES</text></ListGroup.Item>
      <ListGroup.Item ><text class="txt"> BOOK OF ABSTRACTS</text></ListGroup.Item>
      <ListGroup.Item ><text class="txt"> ABSTRACT SUBMISSION</text></ListGroup.Item>
      <ListGroup.Item ><text class="txt"> FIRST CIRCULAR</text></ListGroup.Item>
      <ListGroup.Item ><text class="txt"> SECOND CIRCULAR</text></ListGroup.Item>
      <ListGroup.Item ><text class="txt"> THIRD CIRCULAR</text></ListGroup.Item>
      <ListGroup.Item ><text class="txt"> SCIENTIFIC COMITE</text></ListGroup.Item>
      <ListGroup.Item ><text class="txt"> LOGISTIC COMITE</text></ListGroup.Item>
      <ListGroup.Item ><text class="txt"> SPONSORS</text></ListGroup.Item>
      <ListGroup.Item ><text class="txt"> PROGRAM ISCA2023</text></ListGroup.Item>
      <ListGroup.Item ><text class="txt"> PARTICIPATION FEES</text></ListGroup.Item>

    </ListGroup>

    </div>
  );
}

export default SideBarLeft;



