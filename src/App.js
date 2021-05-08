import './App.css';
import Body from './Component/Body';
import User from './Component/User';
import Form from './Component/Form';
import Api from './Component/Api';
import { Navbar, Nav } from 'react-bootstrap';
import Routefile from './Component/Routefile';
import { Link, Route,BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#Routefile"><Link to="/Routefile">Routefile</Link></Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>

        </Navbar>
        <Switch> 
        <Route path="/Routefile">
          <Routefile />
        </Route>
      </Switch>
      </Router>
      <Api />
  
    </div>

  );
}

export default App;
