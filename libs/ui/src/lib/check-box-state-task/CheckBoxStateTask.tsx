import React, { useState } from 'react';
import { Checkbox } from '@material-ui/core';

export interface CheckBoxStateTaskProps {
  id: string;
}

const CheckBoxStateTask: React.FC<CheckBoxStateTaskProps> = (props) => {
  const { id } = props;
  const [checked, setChecked] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <Checkbox
        checked={checked}
        id={id}
        onChange={handleChange}
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
    </>
  );
};

export default CheckBoxStateTask;
