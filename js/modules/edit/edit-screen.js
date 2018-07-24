import EditView from './edit-view';
import addRowTemplate from '../../block/add-row-template';
// import Application from '../../application.js';

export default class EditScreen {
  constructor(set) {
    this.set = set;
    this.content = new EditView(this.set);
    this.root = document.createElement(`div`);
    this.root.appendChild(this.content.element);

    this.init();
  }

  get element() {
    return this.root;
  }

  init() {
    this.content.onAddTermClick = this.addTerm.bind(this);
  }

  addTerm() {
    const setTable = this.root.querySelector(`.edit__set`);

    const container = document.createElement(`template`);
    container.innerHTML = addRowTemplate();
    setTable.appendChild(container.content);
  }

}
