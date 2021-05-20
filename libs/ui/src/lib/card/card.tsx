import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Route, Link } from 'react-router-dom';
import { CardProps, showDate } from '@todotrello/data';
import { Box, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  title: {
    fontSize: '16px',
    marginTop: '8px',
  },
  labelText: {
    display: 'none',
  },
  labels: {
    minHeight: '8px',
    minWidth: '40px',
    marginLeft: '3px',
    padding: '2px',
    borderRadius: '4px',
    '&:hover ': {
      '& $labelText': {
        display: 'block',
      },
    },
  },

  pos: {
    marginBottom: 12,
    textAlign: 'left',
  },
});

export const CardTodo: React.FC<CardProps> = ({ card, users, labels }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={1} justify="flex-start" wrap="wrap">
          {card.labelsId?.map((item, index) => {
            return (
              <Box
                className={classes.labels}
                bgcolor={labels.find((label) => label.id === item.id).color}
                key={index}
              >
                <Typography className={classes.labelText}>
                  {labels.find((label) => label.id === item.id).label}
                </Typography>
              </Box>
            );
          })}
        </Grid>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {card.titleCard}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {card.checkDone.startTime
            ? new Date(card.checkDone.startTime).toLocaleDateString(
                'en-EN',
                showDate
              )
            : ''}
        </Typography>
        <Typography variant="body2" component="p">
          user: {users.find((item) => item.id === card.userId.id).user}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/edit-card/${card.id}`}>
          <Button size="small">More...</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
