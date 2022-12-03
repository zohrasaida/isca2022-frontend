
import Container from 'react-bootstrap/Container';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
//


function Header (){


    return (

<Navbar  className="color-nav">
        <Container className="header-right" >
        <img src="logoIcsa.png" alt="LOGO ICSA2023" className="logo"></img>

        
          <Navbar.Brand href="#home"> <h5>International Conference
on Spectroscopy </h5><br></br>  <h5>and Applications 2023</h5> </Navbar.Brand>
        </Container>
      </Navbar>


    );
}

export default Header;