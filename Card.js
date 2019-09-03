import React from 'react';


function Card(props) {
  return (
    <div className='card'>
            <div className='card-left'>
              <img src={require ('./assets/image/banner.jpg')} alt='' width='100%' height='100%'></img>
            </div>
            <div className='card-right'>
              <h1>{props.title}</h1>
              <p>
                {props.content}
              </p>
              <button id='btn1'>Get Started</button>
              <button id='btn2'>Sign Up</button>
            </div>
    </div>
  );
}

export default Card;
