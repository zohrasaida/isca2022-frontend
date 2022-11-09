


import Accordion from 'react-bootstrap/Accordion';

function InvitedSpeakers() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Invited Speakers</Accordion.Header>
        <Accordion.Body>
        1- Vincent BOUDON (France)
2- Agnès PERRIN (France)<br></br>
3- Alain COMPARGUE (France)<br></br>
4- Fridolin KWABIA (France)<br></br>
5- Claudine CREPIN (France)<br></br>
6- Marc FONTANA (France)<br></br>
7- Ha TRA (France)<br></br>
8- Isabelle KLEINER (France)<br></br>
9- Arnaud CUISSET (France)<br></br>
10- Laurent MANCERON (France)<br></br>
11- Majdi HOCHLAF (France)<br></br>
12- Laurence PRIVOST (France)<br></br>
13- Osman ADIGUZEL (Turkey)<br></br>
14- Jean Michel HARTMAN (France)<br></br>
15- Pascal Quinet (Belgique)<br></br>
16- Bastien Vispoel (Belgian)<br></br>
17- Taieb BEN DHIA (Tunisia)<br></br>
18- Younes ABID (Tunisia)<br></br>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
  );
}

export default InvitedSpeakers;