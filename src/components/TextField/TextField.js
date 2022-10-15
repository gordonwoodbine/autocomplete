import { TextField as MTextField } from '@material-ui/core';
import PropTypes from 'prop-types';

const TextField = ({ value, onChange, ...props }) => {
  return (
    <MTextField
      value={value}
      onChange={(e) => onChange(e.target.value)}
      {...props}
    />
  );
};

TextField.propTyoes = {
  onChange: PropTypes.func,
};

export default TextField;
