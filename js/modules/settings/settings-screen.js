import SettingsView from './settings-view';
import Application from '../../application.js';
import addInputTemplate from '../../blocks/add-input-template';
import {Keycode} from '../../utils';

const addNewLine = (sets) => {
  sets[sets.length] = {
    name: ` `,
    words: []
  };
  return sets;
};

const updateSet = (sets, cell, input) => {
  const parentTr = cell.parentNode;
  const index = parentTr.sectionRowIndex;
  sets[index].name = input.value;

  return sets;
};

export default class SettingsScreen {
  constructor(sets) {
    this.sets = sets;

    this.content = new SettingsView(this.sets);
    this.root = document.createElement(`div`);
    this.root.appendChild(this.content.element);

    this.init();
  }

  get element() {
    return this.root;
  }

  init() {
    this.content.onCreateClick = this.clickCreate.bind(this);
    this.content.onSetClick = this.clickSet.bind(this);
  }

  clickCreate() {
    this.sets = addNewLine(this.sets);
    this.changeView();

    const currentCell = this.root.querySelector(`tr:nth-child(${this.sets.length}) td:first-child`);
    const container = document.createElement(`template`);
    container.innerHTML = addInputTemplate(`new-input`);
    currentCell.appendChild(container.content);
    const currentInput = currentCell.firstElementChild;
    currentInput.focus();

    currentInput.addEventListener(`keydown`, (evt) => {
      if (evt.keyCode === Keycode.ENTER) {
        evt.stopPropagation();
        currentInput.blur();
        this.sets = updateSet(this.sets, currentCell, currentInput);
        this.changeView();
      }
    });

    currentInput.addEventListener(`blur`, (evt) => {
      evt.stopPropagation();
      this.sets = updateSet(this.sets, currentCell, currentInput);
      this.changeView();
    });

    currentInput.addEventListener(`click`, (evt) => {
      evt.stopPropagation();
    });
  }

  clickSet(set) {
    Application.showManage(set);
  }

  changeView() {
    const view = new SettingsView(this.sets);
    view.onCreateClick = this.clickCreate.bind(this);
    view.onSetClick = this.clickSet.bind(this);

    this.root.replaceChild(view.element, this.content.element);
    this.content = view;
  }

}
