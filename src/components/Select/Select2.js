import {
  Select as MSelect,
  FormControl,
  InputLabel,
  MenuItem,
} from '@material-ui/core';

const Select = () => {
  return (
    <div>
      <FormControl>
        <InputLabel id='test'>Select</InputLabel>
        <MSelect labelId='test' label='Select' variant='outlined'>
          <MenuItem>Hello</MenuItem>
        </MSelect>
      </FormControl>
    </div>
  );
};

export default Select;
