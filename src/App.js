
import { Switch, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import './App.css';
import Header from './components/Header'
import Home from './static/Home'
import About from './static/About';


function App() {
  return (
    <div>
        <Header />
        <Container>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Container>
    </div>
  );
}

export default App;
