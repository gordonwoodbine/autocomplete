import { Select as MSelect, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyles from './style';

const Select = ({ options, value, setValue }) => {
  const classes = useStyles();

  return (
    <MSelect
      variant='outlined'
      classes={classes}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      {options.map((opt, i) => (
        <MenuItem key={opt.value} value={opt.value}>
          {opt.label}
        </MenuItem>
      ))}
    </MSelect>
  );
};

export default Select;
