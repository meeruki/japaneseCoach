import AbstractView from '../abstract-view';
import setsTableTemplate from '../../blocks/sets-table-template';


export default class SettingsView extends AbstractView {
  constructor(name, sets) {
    super();
    this.name = name;
    this.sets = sets;
  }

  get template() {
    return `<div class= "settings"><h1 class="settings__title">Welcome, ${this.name}!</h1><button class="settings__create">new set</button>

${setsTableTemplate(this.sets)}</div>`;
  }

  bind(el) {
    const createButton = el.querySelector(`.settings__create`);
    const setsNames = el.querySelectorAll(`td:first-child`);

    const onCreateButtonClick = (evt) => {
      evt.preventDefault();
      this.onCreateClick();
      createButton.removeEventListener(`click`, onCreateButtonClick);
    };

    createButton.addEventListener(`click`, (evt) => {
      onCreateButtonClick(evt);
    });

    Array.from(setsNames).forEach((set) => {
      set.addEventListener(`click`, () => {
        const currentSet = this.sets.find((it) => it.name === set.innerHTML);
        this.onSetClick(currentSet);
      });
    });

  }

  onCreateClick() {
  }

  onSetClick(set) {
    return set;
  }
}
