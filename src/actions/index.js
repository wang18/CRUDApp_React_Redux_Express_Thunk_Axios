import axios from 'axios';

export const SET_GAMES = 'SET_GAMES';
export const SAVE_GAME = 'SAVE_GAME';

function handleResponse(response) {
    if(response.ok){
        return response.json();
    }else{
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

export function setGames(games) {
    return {
        type: SET_GAMES,
        games
    }
}

export function fetchGames() {
    return dispatch => {
        axios.get('/api/games')
            .then(data => dispatch(setGames(data.data.games)));
    }
}

export function saveGame(data) {
    return dispatch =>{
        return axios.post('/api/games', data);
            //.catch(error => console.log(error.response);
    }
}

