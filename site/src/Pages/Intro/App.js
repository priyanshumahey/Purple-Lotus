//Contains the Intro/Loading Screen
import './App.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//This links to the homepage
//Starts off showing project lotus logo and a start button
//Start button should lead to login and sign in button
//For now, it does not show sign up or login
//It starts by showing a small simple animation matched with a friendly sound
//Then it goes into a screen with parents, children and therapists (homepage)



function Intro() {
  const [showlogin, setshowlogin] = useState(true);

  const changeShow = () => {
    setshowlogin(!showlogin)
  }

  return (
    <div className="App">
      {showlogin && <p>Hello</p>}
      <Link to="/"><button onClick={changeShow}>Here</button></Link>
      <Link to="/Home"><button>Homepage</button></Link>
    </div>
  );
}

export default Intro;