import { getCategory, getLabels, getUser } from '@todotrello/data-access-api';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Loader from 'react-loader-spinner';
import { Container } from '@material-ui/core';
import { CardCol } from './card-col';
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
  })
);

export function App() {
  const classes = useStyles();
  const { data, error, isLoading, isError } = useQuery('category', getCategory);
  const users = useQuery('users', getUser);
  const labels = useQuery('labels', getLabels);
  if (isLoading) {
    return (
      <Container maxWidth="xs">
        <Grid container spacing={3} justify="center">
          <Loader type="ThreeDots" color="#ccc" height={30} />
        </Grid>
      </Container>
    );
  }

  if (isError) {
    return <span>Error: {error}</span>;
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {data.map((item) => (
          <CardCol
            section={item}
            key={item.id}
            users={users.data}
            labels={labels.data}
          />
        ))}
      </Grid>
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;
