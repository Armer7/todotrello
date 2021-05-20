import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TodosPage from './pages/TodosPage';
import CreateCard from './pages/CreateCard';
import EditCard from './pages/EditCard';

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={TodosPage} />
      <Route path="/create-card" component={CreateCard} />
      <Route path="/edit-card/:id" component={EditCard} />
    </Switch>
  );
};

export default App;
