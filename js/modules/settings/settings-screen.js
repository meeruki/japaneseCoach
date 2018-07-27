import SettingsView from './settings-view';
import Application from '../../application.js';


export default class SettingsScreen {
  constructor(data, playerName) {
    this.data = data;
    this.playerName = playerName;

    this.content = new SettingsView(this.playerName, this.data);
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
    Application.showCreate();
  }

  clickSet(set) {
    Application.showManage(set);
  }

}
