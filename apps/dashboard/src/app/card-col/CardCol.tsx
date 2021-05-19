import React from 'react';
import './CardCol.module.scss';
import { CardColProps } from '@todotrello/data';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { useQuery } from 'react-query';
import { getAllCard } from '@todotrello/data-access-api';
import { Container, Button, IconButton, Typography } from '@material-ui/core';
import Loader from 'react-loader-spinner';
import { CardTodo } from '@todotrello/ui';
import ControlPointIcon from '@material-ui/icons/ControlPoint';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    box: {
      margin: theme.spacing(0),
      marginBottom: theme.spacing(1),
    },
    iconBtnAddCard: {
      padding: 0,
    },
    btnAddCard: {
      minWidth: 'auto',
    },
    sectionTitle: {
      paddingLeft: '10px',
      lineHeight: '200%',
    },
  })
);

export const CardCol: React.FC<CardColProps> = ({ section, users, labels }) => {
  const { data, error, isLoading, isError } = useQuery('cards', getAllCard);
  const classes = useStyles();

  if (isLoading) {
    return (
      <Container maxWidth="xs">
        <Grid container spacing={3} justify="center">
          <Loader type="ThreeDots" color="#ccc" height={30} />
        </Grid>
      </Container>
    );
  }

  return (
    <Grid item xs={12} sm={6} md={4} lg={2}>
      <Paper className={classes.paper}>
        <Grid container justify="space-between">
          <Box display="flex" alignContent="center">
            <Typography
              align="left"
              className={classes.sectionTitle}
              component="span"
            >
              {section.title}
            </Typography>
          </Box>
          <Grid item xs={2}>
            <Button size="small" className={classes.btnAddCard}>
              <IconButton component="span" className={classes.iconBtnAddCard}>
                <ControlPointIcon />
              </IconButton>
            </Button>
          </Grid>
        </Grid>
        <Divider />
        {isLoading ? (
          <Box className={classes.box} component="span" m={1}>
            <Loader type="ThreeDots" color="#ccc" height={30} />
          </Box>
        ) : isError ? (
          <Box className={classes.box} component="span" m={1}>
            Error: {error}
          </Box>
        ) : (
          <>
            {data.map((item) => {
              if (section.id === item.sectionId.id) {
                return (
                  <Box
                    className={classes.box}
                    component="div"
                    m={1}
                    key={item.id}
                  >
                    <CardTodo card={item} users={users} labels={labels} />
                  </Box>
                );
              }
              return null;
            })}
          </>
        )}
      </Paper>
    </Grid>
  );
};
