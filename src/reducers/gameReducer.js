import {SET_GAMES} from '../actions/index';

export default function GameReducer(state = [], action) {
    switch(action.type){
        case SET_GAMES:
            return action.games;
        default:
            return state;
    }
}

