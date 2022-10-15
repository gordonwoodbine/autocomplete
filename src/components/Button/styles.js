import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    letterSpacing: theme.spacing(0.1),
    paddingTop: theme.spacing(1),
    paddingBlock: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
}));

export default useStyles;
