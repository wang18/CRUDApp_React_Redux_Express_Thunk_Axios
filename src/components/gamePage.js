import React, {Component} from 'react';
import {connect} from 'react-redux';
import GameList from './gameList';
import {fetchGames} from "../actions/index";

class GamePage extends Component{
    componentDidMount(){
        this.props.fetchGames();
    }
    render(){
        return (<div className="ui container">
            <h1>Game List</h1>
            <GameList games={this.props.games}/>
        </div>);
    }
}

const mapStateToProps = (state) =>{
    return {games:state.games};
}

export default connect(mapStateToProps,{fetchGames})(GamePage)
