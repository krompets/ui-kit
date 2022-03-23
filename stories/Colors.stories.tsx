import { ComponentStory, ComponentMeta } from '@storybook/react'

import Colors from 'components/Colors'

export default {
  title: 'Components/Colors',
  component: Colors,
} as ComponentMeta<typeof Colors>

export const ColorDemo: ComponentStory<typeof Colors> = () => <Colors />
