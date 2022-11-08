import 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import Login from './components/Login';
import SideBar from './components/SideBar';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div className="App">
      <Login/>
      <SideBar/>
      <Footer/>
      
     
    </div>
  );
}

export default App;
