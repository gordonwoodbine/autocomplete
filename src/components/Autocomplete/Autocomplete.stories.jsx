import { Box, Button } from '@material-ui/core';
import axios from 'axios';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import Autocomplete from './Autocomplete';

export default {
  title: 'Core/Autocomplete',
  component: Autocomplete,
};

const initValues = {
  test: [],
};

export const AutoCompleteTest = (args) => {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setOptions(res.data);
    };
    fetch();
  }, []);

  // useEffect(() => {
  //   console.log(options);
  // }, [options]);
  return (
    <>
      <Formik
        initialValues={initValues}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {(actions) => (
          <>
            <form onSubmit={actions.handleSubmit}>
              <Autocomplete
                name='test'
                options={options}
                value={actions.values}
                setValue={actions.setFieldValue}
              />
              <Box mt={2}>
                <Button variant='contained' color='primary' type='submit'>
                  Submit
                </Button>
              </Box>
            </form>
          </>
        )}
      </Formik>
    </>
  );
};
