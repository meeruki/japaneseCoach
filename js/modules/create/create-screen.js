import CreateView from './create-view';
// import Application from '../../application.js';

export default class CreateScreen {
  constructor() {
    this.content = new CreateView();
    this.root = document.createElement(`div`);
    this.root.appendChild(this.content.element);

    this.init();
  }

  get element() {
    return this.root;
  }

  init() {
    // this.content.onNextClick = this.click.bind(this);
    // this.content.onAddTermClick = this.click.addTerm(this);
  }

  click() {
    // Application.showSettings(name);
  }

  addTerm() {

  }

}
