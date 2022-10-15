import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default {
  title: 'Example/AnotherFormikTest',
  component: null,
};

const jsx = {
  string: () => {
    return <div>I am a string</div>;
  },
};

export const Test = () => {
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setFetchedData(res.data);
    };
    fetch();
  }, []);
  return (
    <Formik>
      <Form>
        <>{jsx.string()}</>
      </Form>
    </Formik>
  );
};
