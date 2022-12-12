import type {Meta, Story} from '@storybook/react';

import {SongCard} from '.';
import type {Props as SongCardProps} from './types';

export default {
    component: SongCard,
    title: 'Core/SongCard',
    args: {},
} as Meta;

const Template: Story<SongCardProps> = (args) => <SongCard {...args} />;

export const Default = Template.bind({});
Default.args = {};
