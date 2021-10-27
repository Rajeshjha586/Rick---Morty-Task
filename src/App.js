import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {logo} from './images/ImageList'
import Header from './components/header/Header';

import './App.css';
import SerachBar from './components/searchBar/SerachBar';
import CharacterList from './components/characterList/CharacterList';
import EpisodesListing from './components/episodesListing/EpisodesListing';
import MyWatchList from './components/myWatchList/MyWatchList';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header logo={logo} />
        <Switch>
          <Route exact path="/" render={() => (
            <>
              <SerachBar />
              <CharacterList />
            </>
          )} />

          <Route exact path="/episodes" render={() => (
            <>
              <EpisodesListing />
            </>
          )} />

          <Route exact path="/watchList" render={() => (
            <>
              <MyWatchList />
            </>
          )} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
