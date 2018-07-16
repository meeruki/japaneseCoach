import AbstractView from '../abstract-view';
import setsTableTemplate from '../../block/sets-table-template';


export default class SettingsView extends AbstractView {
  constructor(name, sets) {
    super();
    this.name = name;
    this.sets = sets;
  }

  get template() {
    return `<div class= "settings"><h1 class="settings__title">Добро пожаловать, ${this.name}!</h1><button class="settings__create">Создать новый набор</button>

${setsTableTemplate(this.sets)}</div>`;
  }

  bind(el) {

    const createButton = el.querySelector(`.settings__create`);


    const onCreateButtonClick = (evt) => {
      evt.preventDefault();

      this.onCreateClick();

      createButton.removeEventListener(`click`, onCreateButtonClick);
    };

    createButton.addEventListener(`click`, (evt) => {
      onCreateButtonClick(evt);
    });
  }

  onCreateClick() {

  }
}
