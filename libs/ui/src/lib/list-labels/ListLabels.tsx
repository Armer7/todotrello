import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    groupLabels: {
      flexWrap: 'wrap',
      borderRadius: 0,
      marginTop: '14px',
    },
    iconBtnAddCard: {
      padding: 0,
    },
    btnLabel: {
      padding: '6px',
      color: 'white',
      margin: '2px',
      borderRadius: 0,
    },
    btnAddLabel: {
      padding: '6px',
      margin: '2px',
      borderRadius: 0,
    },
  })
);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ListLabelsProps {}

export const ListLabels: React.FC<ListLabelsProps> = (props) => {
  const classes = useStyles();
  const color = 'red';
  return (
    <ButtonGroup
      className={classes.groupLabels}
      disableElevation
      variant="contained"
      aria-label="list label"
    >
      <Button className={classes.btnLabel} style={{ backgroundColor: color }}>
        One
      </Button>
      <Button className={classes.btnLabel}>Two</Button>
      <Button className={classes.btnLabel}>Three</Button>
      <Button className={classes.btnAddLabel}>
        <IconButton component="span" className={classes.iconBtnAddCard}>
          <ControlPointIcon />
        </IconButton>
      </Button>
    </ButtonGroup>
  );
};

export default ListLabels;
