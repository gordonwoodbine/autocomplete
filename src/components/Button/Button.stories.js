import Button from './Button';

export default {
  component: Button,
  title: 'Core/Button',
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Click Me',
};

export const ContainedPrimary = Template.bind({});
ContainedPrimary.args = {
  ...Default.args,
  variant: 'contained',
  color: 'primary',
};

export const ContainedSecondary = Template.bind({});
ContainedSecondary.args = {
  ...ContainedPrimary.args,
  color: 'secondary',
};
