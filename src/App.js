import { Fragment, React } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import EventDetails from './pages/EventDetails';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import SearchEvent from './pages/SearchEvent';

import './style/CSS/style.css'


function App() {

  return (
    <Fragment>
      <Router>
        <div id="root">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/SearchEvent' component={SearchEvent} />
            {/* <Route path='/Favorites' component={Favorites} /> */}
            <Route path='/EventDetails/:id' component={EventDetails} />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;