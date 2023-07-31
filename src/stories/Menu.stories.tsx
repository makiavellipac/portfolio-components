import type { Meta, StoryObj } from '@storybook/react';

import { Menu } from '../components/Menu';

const meta = {
  title: 'Example/Menu',
  component: Menu,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Menu  >;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuSingle: Story = {
    args: {
        menu:[
           'HOME',
           'SOBRE MI',
           'PORTAFOLIO',
           'CONTACTO',
           'BLOG'
          ],
        color:'red',
        fontColor:'#333'
          
    },
  };



