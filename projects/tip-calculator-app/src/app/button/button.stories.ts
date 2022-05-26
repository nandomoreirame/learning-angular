import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from './button.component';

export default {
  title: 'Tip Calculator/Button',
  component: ButtonComponent,
  argTypes: {
    onClick: { action: 'clicked!' }
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: { ...args },
});

export const Default = Template.bind({});
Default.args = {
  label: 'Click here',
  block: false,
};
