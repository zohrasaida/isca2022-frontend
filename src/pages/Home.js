


import Home from './Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBarLeft from '../components/SideBar';
import Image from 'react-bootstrap/Image'     

function HomePage() {
  return (
    
        
    <Container>
      <Row>
        <Col xs={6} md={4}> <SideBarLeft/></Col>
        <Col xs={12} md={8} class="content">  ICSA2023<br></br>
        Mars 17 - 19, 2023 <br></br>
        Tunis - Tunisia <br></br>

        Organized by :<br></br>

  Tunisian Physical Society (STP)<br></br>


  With the participation of:<br></br>
  -Laboratoire de Spectroscopie et Dynamique Moléculaire – Ecole Nationale Supérieure d’Ingénieurs
de Tunis - Université de Tunis<br></br>
- Laboratoire de Spectroscopie Atomique Moléculaire et Applications - Faculté des Sciences de
Tunis – Université de Tunis El Manar <br></br>
-Laboratoire en Energie et Matière pour le Développement des Sciences Nucléaires CNSTN<br></br>
-Laboratoire de Physique Appliquée - Faculté des Sciences de Sfax – Université de Sfax<br></br>
-Centre National des Sciences et Technologies Nucléaires - Pôle Technologique - Sidi Thabet<br></br>
- Université Gustave Eiffel Champs-sur-Marne France<br></br>
        
{/*}        

  */}
<div class="logos">
<img src="png.png" alt="LOGO UTM" class="logo"></img>
<img src="Gustave Eiffel.png" alt="LOGO GUSTAVE EIFFEL" class="logo"></img>
<img src="cnstn.png" alt="LOGO cnstn" class="logo"></img>
<img src="sfax.jpg" alt="LOGO universite sfax" class="logo"></img>
</div>


Topics<br></br>
1. Infrared and Raman spectroscopy<br></br>
2. VUV and UV- Visible spectroscopy<br></br>
3. Luminescence spectroscopy<br></br>
4. Time resolved optical spectroscopy<br></br>
5. X ray spectroscopy<br></br>
6. Nuclear spectroscopy<br></br>
7. NMR, EPR, and Mossbauer spectroscopy<br></br>
8. TeraHertz spectroscopy<br></br>
9. Molecular dynamics<br></br>
10. Impedance spectroscopy<br></br>
11. Theoretical methods and simulations on spectroscopy<br></br>
12. Applied spectroscopy : material science, Astrophysics, environment, biology, imaging, sensors,<br></br>
logistic, quality control<br></br>
</Col>
      </Row>
      
    </Container>

   
  );
}

export default HomePage;
