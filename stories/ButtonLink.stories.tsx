import { FC } from 'react'
import { Button } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import DemoPlusIcon from './DemoPlusIcon'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

export const Link: ComponentStory<FC> = () => (
  <>
    <Button variant="text_link">Text link</Button>
    <Button leftIcon={<DemoPlusIcon />} variant="text_link">
      Text link with icon
    </Button>
  </>
)
