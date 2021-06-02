import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(', '),
      fontWeight: 400,
      lineHeight: 1,
      fontSize: '1rem',
    },
    labelsShrink: {
      color: 'rgba(0, 0, 0, 0.54)',
      padding: 0,
      transform: 'translate(0, 1.5px) scale(0.75)',
      transformOrigin: 'top left',
      top: 0,
      left: 0,
      position: 'absolute',
    },
  })
);

export interface TopTextOfBlockProps {
  labelText: string;
}

export const TopTextOfBlock: React.FC<TopTextOfBlockProps> = (props) => {
  const classes = useStyles();
  const { labelText } = props;
  return (
    <Box m="8px" position="relative" className={classes.root}>
      <span className={classes.labelsShrink}>{labelText}</span>
      {props.children}
    </Box>
  );
};

export default TopTextOfBlock;
