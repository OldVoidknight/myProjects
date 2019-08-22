import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Content from './Content';
import Card from './Card';
import Footer from './Footer'
function App() {
  return (
    <div>
      <Nav title='My Site'/>
      <Header title='Header'/>
        <div className='content'>
        <h1>Content</h1>
        <Card title='Our Motto' content='Doloribus a quisquam nesciunt sint cum in quasi atque harum cupiditate and the quick brown fox jumped over the lazy fat dog
                Want to know more? Hit the links below' />
        <Card title='Yes' content='New content' />
        <Card title='Different Title' content='Using props to add dynamic content is easy' />
        </div> 
      <Footer title='Footer'/>
    </div>
    
  );
}

export default App;
