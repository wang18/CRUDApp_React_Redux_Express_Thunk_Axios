import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import GamesComponent from './components/gamePage';
import HomePage from './components/homePage';
import GameFormPage from './components/gameFormPage';

const ActiveLink = ({label, to, activeOnlyWhenExact}) => (
    <Route path={to}
           exact={activeOnlyWhenExact}
           children={({match})=>(
               <Link className={match ? 'active item' : 'item'}
                     to={to}>{label}
               </Link>
           )}
           />)

class App extends Component {
  render() {
    return (
      <div className="ui container">
          <div className="ui three item menu">
              <ActiveLink activeOnlyWhenExact className="item" to="/" label="Home"/>
              <ActiveLink activeOnlyWhenExact className="item" to="/games" label="Game"/>
              <ActiveLink activeOnlyWhenExact className="item" to="/games/new" label="New Game"/>
          </div>
          <Switch>
              <Route path="/games/new" component={GameFormPage}/>
              <Route path="/games" component={GamesComponent} />
              <Route path="/" component={HomePage}/>
          </Switch>
      </div>
    );
  }
}

export default App;
