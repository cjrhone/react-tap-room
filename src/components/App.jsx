import React from 'react';
import Header from './Header';
import TapList from './TapList';
import NewTapForm from './NewTapForm'
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>

      <Switch>
        <Route exact path='/' component={TapList} />
        <Route path='/newtap' component={NewTapForm}
      </Switch>
      <TapList/>
    </div>
  );
}

export default App;
