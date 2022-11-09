
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';


function Header (){


    return (

<Navbar bg="primary" variant="dark">
        <Container>
        <img src="logo icsa.png" alt="LOGO ICSA2023" class="logo"></img>
          <Navbar.Brand href="#home"> <h1>International Conference
on Spectroscopy and Applications 2023</h1> </Navbar.Brand>
        </Container>
      </Navbar>


    );
}

export default Header;