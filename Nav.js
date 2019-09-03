import React from 'react';
import {Link} from 'react-router-dom';


function Nav(props) {
  return (
    <div className='nav-bar'>
      <h1>{props.title}</h1>
      <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/services'>Services</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
      </ul> 
    </div>
    
  );
}

export default Nav;
