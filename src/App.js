import './App.css';
import Login from './Login';
import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js"

// instance of spotify
const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken ] =  useState(null)
  // Run code based on a given condition
  useEffect(() => {
    // grab the token from url 
    const hash = getTokenFromUrl()
    // clears token
    window.location.hash = ""
    const _token = hash.access_token;
    if (_token){
      setToken(_token)
      // sets access token helps connect spotify to react
      spotify.setAccessToken(_token)
      // async function gets user accounts 
      spotify.getMe().then(user => {
        console.log('***********userrrrrr', user)
      })
    }
    console.log("I have a token ******", token)
  }, []);

  return (
    <div className="app">
     {/* if token show player else show login page */}
      {
        token ? (
          <h1> I am logged in</h1>
        ) : (
          <Login />
        )
      }

    </div>
  );
}

export default App;
