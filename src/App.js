import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Error from'./Error';
import MemoryGame from './MemoryGame';
import InfoPage from './infopage';
import Auticator from './Auticator';
import Cartoon from './cartoon';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path ="/" component = {Auticator} />
        <Route exact path ="/cartoon" component = {Cartoon} />
        <Route exact path ="/game" component = {MemoryGame} />
        <Route exact path ="/FAQ" component = {InfoPage} />
        <Route component = {Error} />
      </Switch>
    </div>
  );
}

export default App;
