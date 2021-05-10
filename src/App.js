import './App.css';
import Body from './Component/Body';
import User from './Component/User';
import Form from './Component/Form';
import Header from './Component/Header';
import { Navbar, Nav } from 'react-bootstrap';
import Routefile from './Component/Routefile';
import { Link, Route,BrowserRouter as Router, Switch } from 'react-router-dom';
import AddRouter from './Component/AddRouter';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="Routefile"><Link to="/Routefile">About Us</Link></Nav.Link>
            <Nav.Link href="Form">Form</Nav.Link>
            <Nav.Link href="Body">Custome</Nav.Link>
          </Nav>

        </Navbar>
        <Switch> 
        <Route path="/Routefile">
          <Routefile />
        </Route>
        <Route path="/Form">
          <Form />
        </Route>
        <Route path="/Body">
          <Body />
        </Route>
      </Switch>
      <AddRouter />
      </Router>
     
     
    </div>

  );
}

export default App;

