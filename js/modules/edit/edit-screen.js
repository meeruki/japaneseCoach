import EditView from './edit-view';
import addRowTemplate from '../../blocks/add-row-template';
import addInputTemplate from '../../blocks/add-input-template';
import Application from '../../application';
import {Keycode} from '../../data/data';

const updateSet = (wordObject, index) => {
  const setTable = document.querySelector(`.edit__set`);
  const word = setTable.querySelector(`tr:nth-child(${index + 2}) td:nth-child(1)`);
  const translation = setTable.querySelector(`tr:nth-child(${index + 2}) td:nth-child(2)`);
  const syllabary = setTable.querySelector(`tr:nth-child(${index + 2}) td:nth-child(3)`);
  wordObject.word = word.innerHTML;
  wordObject.translation = translation.innerHTML;
  wordObject.syllabary = syllabary.innerHTML;

  return wordObject;
};

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
      currentInput.addEventListener(`keydown`, (evt) => {
        if (evt.keyCode === Keycode.ENTER) {
          evt.stopPropagation();
          currentInput.blur();
        }
      });
      currentInput.addEventListener(`blur`, (evt) => {
        evt.stopPropagation();
        element.innerHTML = currentInput.value;
      });
    }
  }

  submitForm(set) {
    let newSet = set;
    newSet.words.map((wordObject, index) => updateSet(wordObject, index));
    this.set = newSet;
    Application.showSettings();
  }
}
