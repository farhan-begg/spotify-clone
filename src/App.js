import './App.css';
import Login from './Login';
import Player from './Player'
import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js"
import { useDataLayerValue } from './DataLayer';

// instance of spotify
const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken ] =  useState(null)
  const [{ user }, dispatch] = useDataLayerValue();
  // Run code based on a given condition
  useEffect(() => {
    // grabs token from url 
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
        // pop in user into the datalayer
        dispatch({
          type: 'SET_USER',
          user: user
        });
      });
    }
    console.log("I have a token ******", token)
  }, []);

  return (
    <div className="app">
     {/* if token show player else show login page */}
      {
        token ? (
          <Player />
     
        ) : (
          <Login />
        )
      }

    </div>
  );
}

export default App;
