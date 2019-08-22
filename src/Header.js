import React from 'react';


function Header(props) {
  return (
    <div className='header'>
        <div className='left-header'>
          <h1>Doloribus a quisquam nesciunt sint cum in quasi atque harum cupiditate and the quick brown fox jumped over the lazy fat dog</h1>
            <p>
            DATA RECOVERY FOUNDATION (DRF) is a forward-thinking and innovative institution that is dedicated to the 
tireless pursuit of data protection in an interconnected world where data is paramount to the workings of
corporate interests. The DRF can help you protect your company's most valuable assets with cutting-edge solutions and
technologies with 24/7 support from experienced and hardworking staff.
            </p>
            <button id='btn1'>Enroll Course</button>
            <button id='btn2'>Learn More</button>
        </div>
        <div className='right-header'>
          <img src={require ('./assets/image/banner.jpg')} alt='' className='image'></img>
        </div>
    </div>
    
  );
}

export default Header;
