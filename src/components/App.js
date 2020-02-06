import React from 'react';
import CharacterList from '../components/characters/CharacterList';
import CharacterDetail from '../components/characters/CharacterDetail';
import Header from '../components/Header';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={CharacterList} />
        <Route path="/characterDetail/:id" component={CharacterDetail} />
      </Switch>
    </Router>
  );
}
  
