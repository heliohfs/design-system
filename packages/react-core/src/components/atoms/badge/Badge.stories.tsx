import React from 'react';
import { Badge, BadgeProps } from './Badge';
import { Story } from '@storybook/react';

export default {
  title: 'Badge',
  component: Badge,
};

const Template: Story<BadgeProps> = () => <Badge />;

export const Base = Template.bind({});
