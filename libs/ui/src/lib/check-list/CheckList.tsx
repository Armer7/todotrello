import React from 'react';
import CheckBoxStateTask from '../check-box-state-task/CheckBoxStateTask';
import { Box, FormControl, Input } from '@material-ui/core';
import SelectBox from '../select-box/SelectBox';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CheckListProps {}

const CheckList: React.FC<CheckListProps> = (props) => {
  return (
    <Box display="flex" alignItems="center" m="10px">
      <CheckBoxStateTask id="2" />
      <FormControl size="small" fullWidth variant="outlined">
        <Input id="descript" />
      </FormControl>
      <SelectBox label="" />
    </Box>
  );
};

export default CheckList;
