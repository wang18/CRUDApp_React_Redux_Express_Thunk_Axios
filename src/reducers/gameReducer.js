import {SET_GAMES, ADD_GAME, GAME_FETCHED,GAME_UPDATED, GAME_DELETED} from '../actions/index';

export default function GameReducer(state = [], action) {
    switch(action.type){
        case SET_GAMES:
            return action.games;
        case ADD_GAME:
            return [...state,
                action.game.data.game];
        case GAME_FETCHED:
            const ind=state.findIndex(item => item._id === action.game.data.game._id);
            if(ind > -1){
                return state.map(item => {
                    if(item._id === action.game.data.game._id){
                        return action.game.data.game;
                    }
                    return item;
                });
            }else{
                return [...state, action.game.data.game];
            }
        case GAME_DELETED:
            console.log('red: ', action);
            return state.filter(item => item._id !==action.gameId);

        case GAME_UPDATED:
            return state.map(item => {
                if(item._id===action.game.data.game._id){
                     return action.game.data.game;
                }
                return item;
            });

        default:
            return state;
    }
}

