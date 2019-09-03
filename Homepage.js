import React from 'react';
import Card from './Card';

function Homepage(){
    return(
    <>
        <h1>Home</h1>
        <Card title='Our Motto' content='Doloribus a quisquam nesciunt sint cum in quasi atque harum cupiditate and the quick brown fox jumped over the lazy fat dog
        Want to know more? Hit the links below' />
        <Card title='Yes' content='New content' />
        <Card title='Different Title' content='Using props to add dynamic content is easy' />
    </>
    )

}


export default Homepage;