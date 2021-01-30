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
  const [{ user, token }, dispatch] = useDataLayerValue();
  // Run code based on a given condition
  useEffect(() => {
    // grabs token from url 
    const hash = getTokenFromUrl()
    // clears token
    window.location.hash = ""
    const _token = hash.access_token;
    
    if (_token){

      dispatch({
        type: "SET_TOKEN",
        token: _token

      })
      // sets access token helps connect spotify to react
      spotify.setAccessToken(_token)
      // async function gets user accounts 
      spotify.getMe().then(user => {
        
        // pop in user into the datalayer
        dispatch({
          type: 'SET_USER',
          user: user
        });
      });
    }

  }, []);




  return (
    <div className="app">
     {/* if token show player else show login page */}
      {token?(<Player spotify={spotify}/>):(<Login />)}
  
          
      
  
       
     

    </div>
  );
}

export default App;
