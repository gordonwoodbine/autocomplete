import { Formik } from 'formik';
import FormikTest from './FormikTest';

export default {
  title: 'Example/Formik',
  component: FormikTest,
};

export const FormikTestExample = () => {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '' }}
      onSubmit={(values, actions) => {
        console.log('values:', values);
        console.log('actions:', actions);
      }}
    >
      {(formik) => {
        console.log('formik', formik);
        return (
          <form onSubmit={formik.handleSubmit}>
            <div
              className='form-field'
              style={{
                display: 'flex',
                flexDirection: 'column',
                margin: '10px 0',
                fontSize: '1.3rem',
              }}
            >
              <label htmlFor='firstName' style={{ marginBottom: '10px' }}>
                First Name
              </label>
              <input
                name='firstName'
                id='firstName'
                type='text'
                {...formik.getFieldProps('firstName')}
              />
            </div>
            <button type='submit'>Submit</button>
          </form>
        );
      }}
    </Formik>
  );
};
