import ToggleButton from '../components/basic/ToggleButton.vue'

export default {
  title: 'Test/공통/ToggleButton',
  component: ToggleButton,
}

const Template = (args) => ({
  component: { ToggleButton },
  setup(){
    return { args};
  },
  template: "<toggle-button v-bind=\"args\" />"
})

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  value: false,
  toggleId: "life-log"
}