


import Home from './Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBarLeft from '../components/SideBar';
import Image from 'react-bootstrap/Image' ;    

function HomePage() {
  return (
    
        
    <Container className="container">


      
        
       <div className="main-info"> ICSA2023<br></br>
        Mars 17 - 19, 2023 <br></br>
        Tunis - Tunisia <br></br>
        </div>
<br></br><br></br><br></br><br></br><br></br>

<div className="organization">
        Organized by :<br></br>

  Tunisian Physical Society (STP)<br></br>
<br></br>

  With the participation of:<br></br>
  <br></br>
  <br></br>

  </div>
  -Laboratory of Spectroscopy and Molecular Dynamics – Tunis National School of Engineering - University of Tunis<br></br>
  - Laboratory of Molecular Atomic Spectroscopy and Applications - Faculty of Sciences of Tunis – University of Tunis El Manar <br></br>
  -Laboratory in Energy and Matter for the Development of Nuclear Sciences CNSTN<br></br>
  -Laboratory of Applied Physics - Faculty of Science of Sfax – University of Sfax<br></br>
  -national center of science and nuclear technologies -technological pole-sidi thabet<br></br>
  - Gustave Eiffel university Champs-sur-Marne France<br></br>
        
{/*}        

  */}
  <br></br>
  <br></br>
  <br></br>

<div className="logos">
    <img className="logo" src="png.jpg" />
    <img className="logo" src="GustaveEiffel.png" />
    <img className="logo" src="cnstn.jpg"  />
    <img className="logo" src="sfax.jpg" />
    <img className="logo" src="UTM.jpg" />
</div>

<div className="topics">
  <h4>
    This year's conference Topics are:
  </h4>
  <p>
    1. Infrared and Raman spectroscopy
  </p>
  <p>
    2. VUV and UV- Visible spectroscopy
  </p>
  <p>
    3. Luminescence spectroscopy
  </p>
  <p>
    4. Time resolved optical spectroscopy 
  </p>
  <p>
    5. X ray spectroscopy
  </p>
  <p>
    6. Nuclear spectroscopy
  </p>
  <p>
    7. NMR, EPR, and Mossbauer spectroscopy
  </p>
  <p>
    8. TeraHertz spectroscopy
  </p>
  <p>
    9. Molecular dynamics
  </p>
  <p>
    10. Impedance spectroscopy
  </p>
  <p>
    11. Theoretical methods and simulations on spectroscopy
  </p>
  <p>
    12. Applied spectroscopy : material science, Astrophysics, environment, biology, imaging, sensors,logistic, quality control
  </p>

</div>


      
    </Container>

   
  );
}

export default HomePage;
