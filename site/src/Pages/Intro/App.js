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
  const [showlogin, setshowlogin] = useState(false);

  const changeShow = () => {
    setshowlogin(!showlogin)
  }

  return (
    <div className="App">
      {showlogin || <p className="button-51 center" role="button" onClick={changeShow} mTop='30%'>Start!</p>}
      <div>
        {/* showlogin || (PUT LOGO HERE) /> */}
      </div>
      <div>
        {showlogin && <p className="start-text">Hello! Welcome to Project Lotus! Project Lotus is still early in on development.
          Currently, this is a demo we've created to allow our vision to be seen.
        </p>}
        {showlogin && <Link to="/Home"><button className="button-51 center" role="button" marginTop='10% !important'>Begin your journey</button></Link>}
      </div>
    </div>
  );
}


export default Intro;