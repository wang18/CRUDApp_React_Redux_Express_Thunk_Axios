import axios from 'axios';

export const SET_GAMES = 'SET_GAMES';
export const SAVE_GAME = 'SAVE_GAME';
export const ADD_GAME = 'ADD_GAME';
export const GAME_FETCHED = 'GAME_FETCHED';

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

export function addGame(game) {
    return {
        type: ADD_GAME,
        game
    }
}
export function saveGame(data) {
    return dispatch =>{
        return axios.post('/api/games', data).then(data => dispatch(addGame(data)));
            //.catch(error => console.log(error.response);
    }
}

export function gameFetched(game){
    return {
      type: GAME_FETCHED,
        game
    };
}
export function fetchGame(id){
    return dispatch => {
        axios.get(`/api/games/${id}`)
            .then(data =>{
                dispatch(gameFetched(data));
            });

    };
}
