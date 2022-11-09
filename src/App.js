import 'react-bootstrap';
import './App.css';
import Home from './pages/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import SideBar from './components/SideBar';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
      </div>
  );
}

export default App;
