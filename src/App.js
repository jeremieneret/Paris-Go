import { Fragment, React } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EventDetails from './pages/EventDetails';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import SearchEvent from './pages/SearchEvent';
import './style/CSS/style.css'

function App() {

  return (
    <Fragment>
      <Router>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/EventDetails/:id' component={EventDetails} />
                <Route path='/Favorites' component={Favorites} />
                <Route path='/SearchEvent' component={SearchEvent} />
            </Switch>
      </Router>
    </Fragment>
  );
}

export default App;