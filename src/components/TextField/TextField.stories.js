import TextField from './TextField';
import { useState } from 'react';

export default {
  componenent: TextField,
  title: 'Core/TextField',
  argTypes: {
    value: {
      control: {
        disable: true,
      },
    },
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value ?? '');
  return (
    <>
      <TextField
        onChange={(params) => {
          // args.onChange(...params);
          setValue(params);
        }}
        value={value}
        {...args}
      />
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  value: 'asdf',
};
