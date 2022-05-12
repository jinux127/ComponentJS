export default class Component {
  $target;
  $state;

  constructor($target) {
    this.$target = $target;
    this.setup();
    this.setEvent();
    this.render();
  }

  setup() {}

  template() {
    return '';
  }

  setEvent() {}

  setState(nextState) {
    this.$state = { ...this.$state, ...nextState };
    this.render();
  }

  render() {
    this.$target.innerHTML = this.template();
  }
}
