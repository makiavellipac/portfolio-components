import type { Meta, StoryObj } from '@storybook/react';

import { Glitch } from '../components/Glitch';

const meta = {
  title: 'Example/Glitch',
  component: Glitch,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Glitch  >;

export default meta;
type Story = StoryObj<typeof meta>;

export const GlitchSingle: Story = {
    args: {
      name:'Makiavelli Pac',
    },
  };

export const GlitchCustom: Story = {
  args: {
    name:'Makiavelli Pac',
    color: '#32aedb',
    backgroundColor:'#FFF',
    fontColor:'#ADADAD',
    width:'290px'
  },
};

