import React, {Component} from 'react';
import {connect} from 'react-redux';
import GameList from './gameList';
import {fetchGames, deleteGame} from "../actions/index";
import PropTypes from 'prop-types';

class GamePage extends Component{
    componentDidMount(){
        this.props.fetchGames();
    }
    render(){
        return (<div className="ui container">
            <h1>Game List</h1>
            <GameList games={this.props.games} deleteGame={deleteGame}/>
        </div>);
    }
}

const mapStateToProps = (state) =>{
    return {games:state.games};
}

GamePage.propTypes={
    games: PropTypes.array.isRequired,
    fetchGames: PropTypes.func.isRequired,
    deleteGame: PropTypes.func.isRequired
}

export default connect(mapStateToProps,{fetchGames, deleteGame})(GamePage)
