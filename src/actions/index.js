import axios from 'axios';

export const SET_GAMES = 'SET_GAMES';
export const SAVE_GAME = 'SAVE_GAME';
export const ADD_GAME = 'ADD_GAME';
export const GAME_FETCHED = 'GAME_FETCHED';
export const GAME_UPDATED = 'GAME_UPDATED';
export const GAME_DELETED = 'GAME_DELETED';

/*function handleResponse(response) {
    if(response.ok){
        return response.json();
    }else{
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}*/

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

export function gameUpdated(game) {
    return {
        type:GAME_UPDATED,
        game
    };
}

export function updateGame(data){
    return dispatch =>{
        return axios.put(`/api/games/${data._id}`, data)
            .then(data => {
                dispatch(gameUpdated(data));
            });
    };
}

export function gameDeleted(gameId) {
    return{
        type: GAME_DELETED,
        gameId
    };
}

export function deleteGame(gameId){
    console.log('act: ', gameId);
    //return dispatch =>{
    console.log('111: ', gameId);
    axios.delete(`/api/games/${gameId}`).then(data => {
        console.log('ax: ',data);
        gameDeleted(gameId);
    });

    /*return{
        type: GAME_DELETED1,
        gameId
    };*/
}

