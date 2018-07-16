import RulesView from './rules-view';
import Application from '../../application.js';


export default class RulesScreen {
  constructor() {
    this.content = new RulesView();
    this.root = document.createElement(`div`);
    this.root.appendChild(this.content.element);

    this.init();
  }

  get element() {
    return this.root;
  }

  init() {
    this.content.onNextClick = this.click.bind(this);

  }

  click(name) {
    Application.showSettings(name);
  }


}
