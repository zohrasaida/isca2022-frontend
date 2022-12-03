

import './SideBar.css';
import ListGroup from 'react-bootstrap/ListGroup';
//hover on word underline done
function SideBarLeft() {
  return (
    <div class="SideBar">
    <ListGroup>
      <ListGroup.Item action href='/Home'><text class="txt"> HOME</text> </ListGroup.Item>
      <ListGroup.Item action href='/InvitedSpeakers'><text class="txt"> INVITED SPEAKERS</text></ListGroup.Item>
      <ListGroup.Item action href='/ImportantDates'><text class="txt"> IMPORTANT DATES</text></ListGroup.Item>
      <ListGroup.Item action href='/BookOfAbstract'><text class="txt"> BOOK OF ABSTRACTS</text></ListGroup.Item>
      <ListGroup.Item action href='/AbstractSubmission'><text class="txt"> ABSTRACT SUBMISSION</text></ListGroup.Item>
      <ListGroup.Item action href='/FirstCircular'><text class="txt"> FIRST CIRCULAR</text></ListGroup.Item>
      <ListGroup.Item action href='/SecondCircular'><text class="txt"> SECOND CIRCULAR</text></ListGroup.Item>
      <ListGroup.Item action href='/ThirdCircular'><text class="txt"> THIRD CIRCULAR</text></ListGroup.Item>
      <ListGroup.Item action href='/ScientificComite'><text class="txt"> SCIENTIFIC COMITE</text></ListGroup.Item>
      <ListGroup.Item action href='/OrganizingComite'><text class="txt"> ORGANIZING COMITE</text></ListGroup.Item>
      <ListGroup.Item action href='/Sponsors'><text class="txt"> SPONSORS</text></ListGroup.Item>
      <ListGroup.Item action href='/ProgramICSA2023'><text class="txt"> PROGRAM ICSA2023</text></ListGroup.Item>
      <ListGroup.Item action href='/ParticipationFees'><text class="txt"> PARTICIPATION FEES</text></ListGroup.Item>

    </ListGroup>

    </div>
  );
}

export default SideBarLeft;



