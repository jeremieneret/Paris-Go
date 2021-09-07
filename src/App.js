import { React } from 'react';
// import DisplayColors from './components/DisplayColors';
import DisplayEventCards from './components/DisplayEventCards';

import './style/CSS/style.css'


function App() {

  return (
    <div className="App">
      <main>
        <DisplayEventCards />
        {/* <DisplayColors /> */}
      </main>
    </div>
  );
}

export default App;