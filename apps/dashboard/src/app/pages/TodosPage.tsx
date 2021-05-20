import {
  getAllCard,
  getCategory,
  getLabels,
  getUser,
} from '@todotrello/data-access-api';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Loader from 'react-loader-spinner';
import { Container } from '@material-ui/core';
import { CardCol } from '../components/card-col';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: '15px',
    },
  })
);

const TodosPage = () => {
  const classes = useStyles();
  const { data, error, isLoading, isError } = useQuery('category', getCategory);
  const cards = useQuery('cards', getAllCard);
  const users = useQuery('users', getUser);
  const labels = useQuery('labels', getLabels);

  if (isLoading || cards.isLoading || users.isLoading || labels.isLoading) {
    return (
      <Container maxWidth="xs">
        <Grid container spacing={5} justify="center">
          <Loader type="ThreeDots" color="#ccc" height={30} />
        </Grid>
      </Container>
    );
  }

  if (isError || cards.isError || users.isError || labels.isError) {
    return (
      <span>
        Error:{' '}
        {isError
          ? error
          : cards.isError
          ? cards.error
          : users.isError
          ? users.error
          : labels.isError
          ? labels.error
          : ''}
      </span>
    );
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {data.map((item) => (
          <CardCol
            section={item}
            key={item.id}
            users={users.data}
            labels={labels.data}
            cards={cards.data}
          />
        ))}
      </Grid>
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
};

export default TodosPage;
