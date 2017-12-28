import React from 'react';
import GameCard from './gameCard';
import PropTypes from 'prop-types';

const GameList = ({games,deleteGame}) =>{
    const empty=(<p>No games...</p>);
    const gameList=(<div className="ui four cards">
        {games.map(game => <GameCard game={game} key={game._id} deleteGame={deleteGame}/>)}

    </div>);
    return (<div>
        {games.length !==0 ? gameList : empty}
    </div>);
}


GameList.propTypes={
    games: PropTypes.array.isRequired,
    deleteGame: PropTypes.func.isRequired
}

export default GameList;