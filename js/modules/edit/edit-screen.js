import EditView from './edit-view';
import addInputTemplate from '../../blocks/add-input-template';
import Application from '../../application';
import {Keycode} from '../../utils';

const addNewLine = (set) => {
  set.words[set.words.length] = {
    word: ` `,
    translation: ` `,
    syllabary: ` `
  };
  return set;
};

const updateSet = (set, input) => {
  const parentTd = input.parentNode;
  const parentTr = parentTd.parentNode;
  const index = parentTr.sectionRowIndex;
  const setName = document.querySelector(`.edit__set-name`);
  if (parentTd.cellIndex === 0) {
    set.words[index - 1].word = input.value;
  } else if (parentTd.cellIndex === 1) {
    set.words[index - 1].translation = input.value;
  } else if (parentTd.cellIndex === 2) {
    set.words[index - 1].syllabary = input.value;
  } else if (setName) {
    set.name = input.value;
  }
  return set;
};

const insertContent = (element, addingFunction) => {
  const container = document.createElement(`template`);
  container.innerHTML = addingFunction(element.innerHTML);
  element.innerHTML = ``;
  element.appendChild(container.content);
};

export default class EditScreen {
  constructor(set) {
    this.set = set;
    this.content = new EditView(this.set);
    this.root = document.createElement(`div`);
    this.root.appendChild(this.content.element);

    this.init(this.content);
  }

  get element() {
    return this.root;
  }

  init(element) {
    element.onAddTermClick = this.addTerm.bind(this);
    element.onCellEditClick = this.cellEdit.bind(this);
    element.onSubmitButtonClick = this.submitForm.bind(this);
  }

  addTerm() {
    this.set = addNewLine(this.set);
    this.changeView();
  }

  cellEdit(element) {
    insertContent(element, addInputTemplate);
    const currentInput = element.querySelector(`input`);
    currentInput.focus();

    currentInput.addEventListener(`keydown`, (evt) => {
      if (evt.keyCode === Keycode.ENTER) {
        evt.stopPropagation();
        currentInput.blur();
        this.set = updateSet(this.set, currentInput);
        this.changeView();
      }
    });

    currentInput.addEventListener(`blur`, (evt) => {
      evt.stopPropagation();
      this.set = updateSet(this.set, currentInput);
      this.changeView();
    });
  }

  submitForm() {
    Application.showSettings();
  }

  changeView() {
    const view = new EditView(this.set);
    this.init(view);

    this.root.replaceChild(view.element, this.content.element);
    this.content = view;
  }

}
