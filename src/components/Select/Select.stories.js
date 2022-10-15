import { useState } from 'react';
import Select from './Select';
import TFSelect from './variants/TextFieldSelect';

const defaultOptions = [
  {
    value: 1,
    label: 'One',
  },
  {
    value: 2,
    label: 'Two',
  },
  {
    value: 3,
    label: 'Three',
  },
];

export default {
  component: Select,
  title: 'Core/Select',
};

const Template = (args) => {
  const [value, setValue] = useState('');
  return <Select value={value} setValue={setValue} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  options: defaultOptions,
  label: 'Select',
};

const TFSelectTemplate = (args) => {
  const [value, setValue] = useState('');
  return <TFSelect value={value} setValue={setValue} {...args} />;
};

export const TFS = TFSelectTemplate.bind({});
TFS.storyName = 'TextFieldSelect';
TFS.args = {
  options: defaultOptions,
  label: 'TextField',
};
