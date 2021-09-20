import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import IntroBanner from './Components/IntroBanner/IntroBanner';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
import Resume from './Components/Resume/Resume';
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/about">
              <IntroBanner></IntroBanner>
            </Route>
            <Route path="/projects">
              <Project></Project>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/resume">
              <Resume></Resume>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
            <Route path="*">

            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
