import { useState } from 'react';
import {
  Box,
  Container,
  Button,
  Popover,
  MenuItem,
  IconButton,
  Select,
  makeStyles,
  FormControl,
  InputLabel,
  Card,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  select: {
    width: '150px',
    marginRight: '10px',
  },
}));

function App() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Container maxWidth='md'>
      <Box style={{ marginTop: '20px' }}>
        <Button variant='outlined' onClick={handleClick}>
          Add Filter
        </Button>
        <Popover
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        >
          <Card style={{ padding: 5, display: 'flex', alignItems: 'flex-end' }}>
            <IconButton
              onClick={handleClose}
              size='small'
              style={{ margin: '0px 10px' }}
            >
              <CloseIcon />
            </IconButton>
            <FormControl>
              <InputLabel>Data Source</InputLabel>
              <Select className={classes.select}>
                <MenuItem>Title</MenuItem>
                <MenuItem>Description</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel>Modifier</InputLabel>
              <Select className={classes.select}></Select>
            </FormControl>
            <FormControl>
              <InputLabel>Value</InputLabel>
              <Select className={classes.select}></Select>
            </FormControl>
            <Button>Add</Button>
          </Card>
        </Popover>
      </Box>
    </Container>
  );
}

export default App;
