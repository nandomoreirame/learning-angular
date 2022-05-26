import { Story, Meta } from '@storybook/angular/types-6-0';
import { CardComponent } from './card.component';

export default {
  title: 'Tip Calculator/Card',
  component: CardComponent,
} as Meta;

const Template: Story<CardComponent> = (args: CardComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
