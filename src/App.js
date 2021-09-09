import { Fragment, React } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import DisplayEventCards from './components/DisplayEventCards';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SearchEvent from './components/SearchEvent';

import './style/CSS/style.css'


function App() {

  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <main>
            <Route exact path='/' component={Home} />
            <Route path='/SearchEvent' component={SearchEvent} />
            <Route path='/DisplayEventCards' component={DisplayEventCards} />
          </main>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;