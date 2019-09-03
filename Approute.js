import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Homepage from './Homepage';
import Servicespage from './Servicespage';
import Contactpage from './Contactpage';
import Aboutpage from './Aboutpage';


function Approute() {
  return (
    <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/services' component={Servicespage}/>
        <Route path='/contact' component={Contactpage} />
        <Route path='/about' component={Aboutpage} />
    </Switch>
    
  );
}

export default Approute;
