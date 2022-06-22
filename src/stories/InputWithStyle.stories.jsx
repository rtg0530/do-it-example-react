import React from 'react';

import Input from '../04/InputWithStyle';

export default {
  title: 'Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'name',
};
