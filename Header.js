import React,{useState} from 'react';


function Header(props) {
  const [state, setState] = useState({heading:'Doloribus a quisquam nesciunt sint cum in quasi atque harum cupiditate and the quick brown fox jumped over the lazy fat dog',body:`DATA RECOVERY FOUNDATION (DRF) is a forward-thinking and innovative institution that is dedicated to the tireless pursuit of data protection in an interconnected world where data is paramount to the workings of
  corporate interests. The DRF can help you protect your company's most valuable assets with cutting-edge solutions and
  technologies with 24/7 support from experienced and hardworking staff.`})

  const [number,setNumber] = useState(0)
  // setInterval(() => {
  //   setNumber(number+1)
  // }, 1000);

  const changeState=() =>{
  setState({heading:'New Heading',body:'New body'})
  }

  const test=()=>{
    // setInterval(() => {
    //   setNumber(number+1)
    // }, 1000);
  }



/*------------------RETURN----------------------*/
  return (
    <div className='header'>
        <div className='left-header'>
          <h2>{number}</h2>
          <h1>{state.heading}</h1>
            <p>
            {state.body}
            </p>
            <button id='btn1' onClick={()=>changeState()}>Enroll Now</button>
            <button id='btn2' onClick={()=>test()}>Learn More</button>
        </div>
        <div className='right-header'>
          <img src={require ('./assets/image/banner.jpg')} alt='' className='image'></img>
        </div>
    </div>
    
  );
}

export default Header;
