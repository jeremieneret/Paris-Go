import { Fragment, React } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SearchEvent from './components/SearchEvent';
import Home from './components/Home';
import Navbar from './components/Navbar';

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
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;