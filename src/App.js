import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import AppRoutes from './constants/AppRoutes';
import Scatter from './components/Scatter/Scatter';
import Olympic from './components/Olympic-Rings/Olympic';
import BarChart from './components/BarChart/BarChart';
import VerticalBarChart from './components/BarChart/VerticalBarChart';
import PieChart from './components/PieChart/PieChart';

function App() {
  const { routes } = AppRoutes();
  const [navLinks, setNavLinks]  = useState(routes);
  const currentLink = window.location.pathname;

  function highlightSelectedLink(index) {
    navLinks.forEach((link, i) => {
      if(i === index){
        link.selected = true;
      }
      else {
        link.selected = false;
      }
    });

    setNavLinks([...navLinks]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sample React-D3 App
        </p>
      </header>
      <Router>
      <div className="sections">
        <ul className="nav">
          {navLinks.map((link, i) => (
            <li key={i}>
              <Link className={(link.selected || link.to === currentLink) ? "router-link selected" : "router-link"} to={link.to} 
              onClick={() => highlightSelectedLink(i)}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="outlet">
          <Switch>
              <Route path="/bar-chart">
                  <BarChart />
              </Route>
              <Route path="/vertical-bar-chart">
                  <VerticalBarChart />
              </Route>
              <Route path="/pie-chart">
                    <PieChart />
              </Route>
              <Route path="/rings">
                  <Olympic />
              </Route>
              <Route path="/">
                  <Scatter />
              </Route>
          </Switch>
        </div>
      </div>
    </Router>
      
    </div>
  );
}

export default App;
