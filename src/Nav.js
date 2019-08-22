import React from 'react';


function Nav(props) {
  return (
    <div className='nav-bar'>
      <h1>{props.title}</h1>
      <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Contact</li>
          <li>About Us</li>
      </ul> 
    </div>
    
  );
}

export default Nav;
