import EditView from './edit-view';
import addRowTemplate from '../../blocks/add-row-template';
import addInputTemplate from '../../blocks/add-input-template ';
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
    this.content.onCellEditClick = this.cellEdit.bind(this);
    this.content.onSubmitButtonClick = this.submitForm.bind(this);
  }

  addTerm() {
    const setTable = this.root.querySelector(`.edit__set`);

    const container = document.createElement(`template`);
    container.innerHTML = addRowTemplate();
    setTable.appendChild(container.content);
  }
  cellEdit(element) {
    const input = element.querySelector(`input`);
    if (!input) {
      const container = document.createElement(`template`);
      container.innerHTML = addInputTemplate(element.innerHTML);
      element.innerHTML = ``;
      element.appendChild(container.content);
      const currentInput = element.querySelector(`input`);
      currentInput.focus();
      currentInput.addEventListener(`blur`, () => {
        element.innerHTML = currentInput.value;
      });
    }
  }

  submitForm() {
  }
}
