import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { lightGreen } from '@material-ui/core/colors';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Input,
  TextField,
  withStyles,
} from '@material-ui/core';
import SelectBox from '../select-box/SelectBox';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ListLabels from '../list-labels/ListLabels';
import TopTextOfBlock from '../top-text-of-block/TopTextOfBlock';
import { DateTimePicker } from '@material-ui/pickers';
import CheckBoxStateTask from '../check-box-state-task/CheckBoxStateTask';
import CheckList from '../check-list/CheckList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '768px',
      padding: '10px',
    },
    avatar: {
      backgroundColor: lightGreen[500],
    },
    datePicker: {
      '& input': {
        paddingTop: '9px',
        paddingBottom: '9px',
      },
      '& .MuiInputLabel-outlined': {
        transform: 'translate(14px, 11px) scale(1)',
      },
      '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
        transform: 'translate(14px, -6px) scale(0.75)',
      },
    },
  })
);

const CssTextField = withStyles({
  root: {
    margin: '3px 8px',
    '& label.Mui-focused': {
      color: 'green',
    },

    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',
      },
      '&:hover fieldset': {
        border: '1px solid',
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        border: '1px solid',
        borderColor: 'green',
      },
    },
  },
})(TextField);

/* eslint-disable-next-line */
export interface FormCardProps {}

export const FormCard: React.FC<FormCardProps> = (props) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            DO
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <HighlightOffIcon />
          </IconButton>
        }
        title="Card ToDo"
        subheader="Fill or edit of fields below"
      />
      <Box display="flex">
        <CssTextField
          id="titleCard"
          label="Title"
          multiline
          fullWidth
          variant="outlined"
          size="small"
        />
      </Box>
      <Box>
        <SelectBox label="Section" />
      </Box>

      <Box display="flex" alignItems="end" flexWrap="wrap">
        <SelectBox label="User" />
        <TopTextOfBlock labelText="Labels">
          <ListLabels />
        </TopTextOfBlock>
      </Box>
      <Box display="flex" alignItems="center" m="10px">
        <CheckBoxStateTask id="checkDone" />
        <DateTimePicker
          className={classes.datePicker}
          autoOk
          clearable
          ampm={false}
          label="Start"
          inputVariant="outlined"
          value={startDate}
          onChange={setStartDate}
        />
        <DateTimePicker
          className={classes.datePicker}
          autoOk
          clearable
          ampm={false}
          label="End"
          inputVariant="outlined"
          value={endDate}
          onChange={setEndDate}
        />
      </Box>
      <Box display="flex">
        <CssTextField
          id="description"
          label="Description"
          fullWidth
          variant="outlined"
          size="small"
        />
      </Box>
      <TopTextOfBlock labelText="Check List">
        <Box display="flex" flexDirection="column">
          <CheckList />
        </Box>
      </TopTextOfBlock>
      <Box m="10px">
        <Button variant="contained">Add check</Button>
      </Box>
    </Card>
  );
};
