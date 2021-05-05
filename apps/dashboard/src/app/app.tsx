import styles from './app.module.scss';
import React, {useEffect, useState} from 'react';
import {CardDataConfig} from "@todotrello/data";
import {getAllCard} from '@todotrello/data-access-api';
import  {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}),
);

export function App() {
  const classes = useStyles();
  const [todos, setTodos] = useState<CardDataConfig[]>([]);

  console.log('getAll',getAllCard());
  return (
        <div className={classes.root}>
          <Grid container spacing={3}>

            <Grid item xs={12} sm={2}>
              <Paper className={classes.paper}>Card</Paper>
            </Grid>
          </Grid>
        </div>
  );
}

export default App;
