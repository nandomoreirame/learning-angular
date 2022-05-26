import { Story, Meta } from '@storybook/angular/types-6-0';
import { InputComponent } from './input.component';

export default {
  title: 'Tip Calculator/Input',
  component: InputComponent,
} as Meta;

const Template: Story<InputComponent> = (args: InputComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
