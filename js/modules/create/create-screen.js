import CreateView from './create-view';
import createSetTemplate from '../../block/create-set-template';
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
    this.content.onAddTermClick = this.addTerm.bind(this);
  }

  click() {
    // Application.showSettings(name);
  }

  addTerm() {
    const createSetForm = this.root.querySelector(`.create__form`);
    const container = document.createElement(`template`);
    container.innerHTML = createSetTemplate();
    createSetForm.appendChild(container.content);
  }

}
