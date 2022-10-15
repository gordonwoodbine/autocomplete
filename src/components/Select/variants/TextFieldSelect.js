import { TextField, MenuItem } from '@material-ui/core';
import useStyles from '../style';

const Select = ({ options, value, setValue, ...props }) => {
  const classes = useStyles();
  return (
    <TextField
      variant='outlined'
      select
      classes={classes}
      label={props.label ?? ''}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      {options.map((opt, i) => (
        <MenuItem key={opt.value} value={opt.value}>
          {opt.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default Select;
