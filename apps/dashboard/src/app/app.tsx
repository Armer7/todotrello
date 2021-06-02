import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import TodosPage from './pages/TodosPage';
import CreateCard from './pages/CreateCard';
import EditCard from './pages/EditCard';

const App: React.FC = () => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Switch>
        <Route exact path="/" component={TodosPage} />
        <Route path="/create-card" component={CreateCard} />
        <Route path="/edit-card/:id" component={EditCard} />
      </Switch>
    </MuiPickersUtilsProvider>
  );
};

export default App;
