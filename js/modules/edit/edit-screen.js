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
  if (parentTd.cellIndex === 0) {
    set.words[index - 1].word = input.value;
  } else if (parentTd.cellIndex === 1) {
    set.words[index - 1].translation = input.value;
  } else {
    set.words[index - 1].syllabary = input.value;
  }
  return set;
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
    this.set = addNewLine(this.set);
    this.changeView();
  }

  cellEdit(element) {
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
    view.onAddTermClick = this.addTerm.bind(this);
    view.onCellEditClick = this.cellEdit.bind(this);
    view.onSubmitButtonClick = this.submitForm.bind(this);

    this.root.replaceChild(view.element, this.content.element);
    this.content = view;
  }

}
