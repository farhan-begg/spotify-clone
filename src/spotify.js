export const authEndpoint = "https://accounts.spotify.com/authorize"
const redirectUri = "http://localhost:3000/"
const clientId = 'bbded4a98bc34320916f53a2f7983f73'


const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];
// grabs hash token 
export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        // #accesstoken=mysupersecret& splits it at the equal sign
        let parts = item.split('=')
        // go into initial array thats return decode access key
        initial[parts[0]] = decodeURIComponent(parts[1])
        
        return initial;
    }, {})
}

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;