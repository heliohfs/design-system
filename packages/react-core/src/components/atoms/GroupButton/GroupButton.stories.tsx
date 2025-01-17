import { Story } from '@storybook/react';
import React from 'react';
import {
  GroupButton,
  GroupButtonOption,
  GroupButtonProps,
  GroupButtonValue,
} from '../GroupButton';

export default {
  title: 'Components/GroupButton',
  component: GroupButton,
};

const options: GroupButtonValue<string>[] = [
  {
    value: 'Sim',
    options: {
      activeBackgroundColor: 'success',
      activeBorderColor: 'success',
    },
  },
  { value: 'Não' },
  {
    value: 'Inválido',
    options: {
      activeBackgroundColor: 'error',
      activeBorderColor: 'error',
    },
  },
];

const Template: Story<GroupButtonProps<any>> = ({ ...args }) => {
  const [active, setActive] = React.useState<string>(options[0].value);

  return (
    <GroupButton
      {...args}
      value={active}
      options={options}
      renderKey={option => option}
      onChange={setActive}
      renderOption={(option, active) => (
        <GroupButtonOption active={active} description={option} />
      )}
    />
  );
};

export const Base = Template.bind({});

Base.args = {
  options,
  buttonSize: 'small',
};
