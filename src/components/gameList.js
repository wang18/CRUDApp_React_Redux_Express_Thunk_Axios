import React from 'react';
import GameCard from './gameCard';

const GameList = ({games}) =>{
    const empty=(<p>No gmaes...</p>);
    const gameList=(<div className="ui four cards">
        {games.map(game => <GameCard game={game} key={game._id}/>)}

    </div>);
    return (<div>
        {games.length !==0 ? gameList : empty}
    </div>);
}

export default GameList;