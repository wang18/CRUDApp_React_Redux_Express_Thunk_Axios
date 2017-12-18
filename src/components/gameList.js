import React from 'react';

const GameList = ({games}) =>{
    const empty=(<p>No gmaes...</p>);
    const gameList=(<p>Game List</p>)
    return (<div>
        {games.length !==0 ? gameList : empty}
    </div>);
}

export default GameList;