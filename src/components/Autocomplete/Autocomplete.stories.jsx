import { Box, Button } from '@material-ui/core';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import Autocomplete from './Autocomplete';
import AutocompleteV2 from './AutocompleteV2';
import AutocompleteV3 from './AutocompleteV3';

export default {
  title: 'Core/Autocomplete',
  component: Autocomplete,
};

const backupOptions = [
  {
    id: 1,
    name: 'Mike Lightfoot',
    email: 'mike.lightfoot@catalyst-it.co.uk',
  },
  {
    id: 2,
    name: 'Percy Musaka',
    email: 'percy.musaka@catalyst-it.co.uk'
  },
  {
    id: 3,
    name: 'Byron Morley',
    email: 'byron.morley@catalyst-it.co.uk'
  }
];

const initValues = { values: [] };

export const AutoCompleteTest = (args) => {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        const filteredData = data.map(d => { return { id: d.id, name: d.name, email: d.email } })
        setOptions(filteredData);
      } catch (err) {
        console.err(err);
        setOptions(backupOptions);
      }

    };
    fetch();
  }, []);

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

export const FlatArrayVersion = (args) => {
  const [options, setOptions] = useState(backupOptions);

  return (
    <>
      <Formik
        initialValues={initValues}
        validationSchema={Yup.object({
          values: Yup.array().of(Yup.string().email((err) => `${err.value} is not a valid email address.\n`))
        })}
        onSubmit={(values, actions) => {
          const { setSubmitting } = actions;
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
        {(actions) => {
          return (
            <>
              <form onSubmit={actions.handleSubmit}>
                <AutocompleteV2
                  name='values'
                  options={options}
                  value={actions.values}
                  setValue={actions.setFieldValue}
                  error={actions.errors}
                />
                <Box mt={2}>
                  <Button variant='contained' color='primary' type='submit'>
                    Submit
                  </Button>
                </Box>
              </form>
            </>
          )
        }}
      </Formik>
    </>
  );
};

export const AddToOptionsVersion = (args) => {
  const [options, setOptions] = useState(backupOptions);

  return (
    <>
      <Formik
        initialValues={initValues}
        validationSchema={Yup.object({
          values: Yup.array().of(Yup.string().email(err => JSON.stringify(err) + ' error'))
        })}
        onSubmit={(values, actions) => {
          const { setSubmitting } = actions;
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
        {(actions) => {
          return (
            <>
              <form onSubmit={actions.handleSubmit}>
                <AutocompleteV3
                  name='values'
                  options={options}
                  value={actions.values}
                  setValue={actions.setFieldValue}
                  setOptions={setOptions}
                  error={actions.errors}
                />
                <Box mt={2}>
                  <Button variant='contained' color='primary' type='submit'>
                    Submit
                  </Button>
                </Box>
              </form>
            </>
          )
        }}
      </Formik>
    </>
  );
};