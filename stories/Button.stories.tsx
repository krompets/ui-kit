import { Button } from '@chakra-ui/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import DemoPlusIcon from './DemoPlusIcon'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'select' },
    },
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>

const commonProps = {
  isDisabled: false,
}

export const Primary: ComponentStory<typeof Button> = args => (
  <>
    <Button {...args}>Button</Button>
    <Button leftIcon={<DemoPlusIcon />} {...args}>
      Button with icon
    </Button>
  </>
)
Primary.args = {
  ...commonProps,
  variant: 'primary',
  size: 'large',
}

export const Secondary: ComponentStory<typeof Button> = args => (
  <>
    <Button {...args}>Button</Button>
    <Button leftIcon={<DemoPlusIcon />} {...args}>
      Button with icon
    </Button>
  </>
)
Secondary.args = {
  ...commonProps,
  variant: 'secondary',
  size: 'medium',
}

export const Tertiary: ComponentStory<typeof Button> = args => (
  <>
    <Button {...args}>Button</Button>
    <Button leftIcon={<DemoPlusIcon />} {...args}>
      Button
    </Button>
  </>
)
Tertiary.args = {
  ...commonProps,
  variant: 'primary',
  size: 'small',
}
