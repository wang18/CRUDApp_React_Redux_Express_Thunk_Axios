import {SET_GAMES, ADD_GAME} from '../actions/index';

export default function GameReducer(state = [], action) {
    switch(action.type){
        case SET_GAMES:
            return action.games;
        case ADD_GAME:
            return [...state,
                action.game.data.game];
        default:
            return state;
    }
}

