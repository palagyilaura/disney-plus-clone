import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Detail from "./components/Detail"
import Login from "./components/Login"

function App() {
  return (
    <div className="App">
      <Router> {/*nézet váltása, a home és a detail között */}
        <Header /> {/*ez marad mind a kettő nézetnél*/}
        <Switch> {/*ez változik a két nézet között*/}
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
