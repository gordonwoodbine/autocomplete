import { Button as MButton } from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyles from './styles';

const Button = ({ label, variant, color, ...props }) => {
  const classes = useStyles();
  return (
    <MButton variant={variant} color={color} {...props} classes={classes}>
      {label}
    </MButton>
  );
};

Button.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['contained', 'outlined', 'standard']),
  color: PropTypes.oneOf(['primary', 'secondary', 'default']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'contained',
  color: 'default',
  onClick: undefined,
};

export default Button;
