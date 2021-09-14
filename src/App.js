import { Fragment, React } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import EventDetails from './pages/EventDetails';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import SearchEvent from './pages/SearchEvent';

import './style/CSS/style.css'
import Favorites from './pages/Favorites';


function App() {

  return (
    <Fragment>
      <Router>
          <div id="root">
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/EventDetails/:id' component={EventDetails} />
                <Route path='/SearchEvent' component={SearchEvent} />
                <Route path='/Favorites' component={Favorites} />
            </Switch>
          </div>
      </Router>
    </Fragment>
  );
}

export default App;