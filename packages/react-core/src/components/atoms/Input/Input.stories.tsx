import React, { useState } from 'react';
import { Story } from '@storybook/react';
import Input, { InputProps } from './Input';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Input',
  component: Input,
};

const Template: Story<InputProps> = args => {
  const { defaultValue = '' } = args;
  const [value, setValue] = useState<string>(defaultValue);

  const onChange = text => {
    setValue(text);
    if (args.onChange) {
      args.onChange(text);
    }
  };

  return (
    <Input
      {...args}
      value={value}
      onChange={onChange}
      placeholder={args.placeholder}
    />
  );
};

export const Base = Template.bind({});

Base.args = {
  onChange: value => action('onChange')(value),
  placeholder: 'Name',
  defaultValue: '',
  disabled: false,
};
