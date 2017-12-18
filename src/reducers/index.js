import {combineReducers} from 'redux';
import games from './gameReducer';

const RootReducer =combineReducers({
    games
});

export default RootReducer;