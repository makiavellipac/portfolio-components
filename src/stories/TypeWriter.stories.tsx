import type { Meta, StoryObj } from '@storybook/react';

import { TypeWriter } from '../components/TypeWriter';

const meta = {
  title: 'Example/Glitch',
  component: TypeWriter,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TypeWriter  >;

export default meta;
type Story = StoryObj<typeof meta>;

export const TypeWriterSingle: Story = {
    args: {
        perfil:[
            "Full Stack Web Developer",
            "MERN Stack",
            "MEAN Stack",
            "Ing. Ciencias De La Computación"
          ],
          color:'#333',
          cursorColor:'#eb83f8'
    },
  };



