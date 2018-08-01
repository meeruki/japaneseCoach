import SettingsView from './settings-view';
import Application from '../../application.js';

export default class SettingsScreen {
  constructor(data) {
    this.data = data;

    this.content = new SettingsView(this.data);
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
    // const table = this.root.querySelector(`.sets`);

  }

  clickSet(set) {
    Application.showManage(set);
  }

}
