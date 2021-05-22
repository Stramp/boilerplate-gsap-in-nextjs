import { Story, Meta } from '@storybook/react/types-6-0'
import Stage from '.'

export default {
  title: 'Stage',
  component: Stage
} as Meta

export const Default: Story = args => <Stage {...args} />
