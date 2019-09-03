import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Approute from './Approute';
import Footer from './Footer';



function App() {
  return (
    <div>
      <Nav title='My Site'/>
      <Header title='Header'/>
        <div className='content'>
        <Approute />
        </div> 
      <Footer title='Footer'/>
    </div>
    
  );
}

export default App;
