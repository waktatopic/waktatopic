import Controller from './Controller';

export default class WidgetController extends Controller {

  constructor(view, name) {
    super();
    this.name = name;
    this.view = view;
    this.visible = false;
  }

  togle() {
    this.visible = !this.visible;
    this.fireChange();
  }

  hide() {
    this.visible = false;
    this.fireChange();
  }

  fireChange() {
    if(this.onChange) {
      this.onChange();
    }
    this.updateView();
  }

  updateView() {
    if(this.view) {
      this.view.setState(this.name, {
        enable: true,
        visible: this.visible,
        active: false
      });
    }
  }

}
