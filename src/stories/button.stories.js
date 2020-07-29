import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './button';

export default {
    component: Button,
    title: 'Button',  
    decorators: [story => <div style={{ padding: '2rem' }}>{story()}</div>],
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};
  
export const buttonData = {
    id: '1',
    text: 'Default',
    state: 'default-button',
    updatedAt: new Date(2018, 0, 1, 9, 0),
};
  
export const actionsData = {
    onClick: action('onClick'),
};
  
export const Default = () => <Button button={{ ...buttonData }} {...actionsData} />;

export const Primary = () => <Button button={{ ...buttonData, text: 'Primary', state: 'primary-button' }} {...actionsData} />;

export const Success = () => <Button button={{ ...buttonData, text: 'Success', state: 'success-button' }} {...actionsData} />;

export const Danger = () => <Button button={{ ...buttonData, text: 'Danger', state: 'danger-button' }} {...actionsData} />;