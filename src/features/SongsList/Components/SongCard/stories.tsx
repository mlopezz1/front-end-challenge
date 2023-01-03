import type { Meta, Story } from '@storybook/react';

import { SongCard } from '.';
import type { Props as SongCardProps } from './types';

export default {
  component: SongCard,
  title: 'SongList/SongCard',
  args: {
    title: 'Baby One More Time',
    artist: 'Ed Sheeran',
    description:
      'Faced with the trend of making the user spend as much time as possible in an app, our goal at Z1 is to create experiences that add up and that are built...',
    image: 'https://imgur.com/fMkMWiC.png',
    duration: '3:30',
    category: 'Pop',
    isLiked: false,
    isPlaying: false,
  },
} as Meta;

const Template: Story<SongCardProps> = (args) => <SongCard {...args} />;

export const Default = Template.bind({});
Default.args = {};
