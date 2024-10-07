import { type Meta, type StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Button } from './button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  argTypes: {
    variant: {
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      control: { type: 'radio' }
    },
    size: { options: ['sm', 'default', 'lg'], control: { type: 'radio' } }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default'
  }
}

export const Destructive: Story = {
  args: {
    children: 'Button',
    variant: 'destructive'
  }
}

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline'
  }
}

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary'
  }
}

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost'
  }
}

export const Link: Story = {
  args: {
    children: 'Button',
    variant: 'link'
  }
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Button'
  }
}

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Button'
  }
}

export const Icon: Story = {
  args: {
    // children: '<Icon />',
    variant: 'default',
    size: 'icon'
  }
}
