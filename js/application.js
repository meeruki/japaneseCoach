import RulesScreen from './modules/rules/rules-screen.js';
import SettingsScreen from './modules/settings/settings-screen.js';
import ManageScreen from './modules/manage/manage-screen.js';
import EditScreen from './modules/edit/edit-screen.js';
import {sets} from './data/data-sets.js';
import GameWriteScreen from './modules/game-write/game-write-screen.js';
import GameWriteModel from './data/game-write-model.js';

const main = document.querySelector(`main.central`);

let playerName;

const changeView = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);
};


export default class Application {

  static start() {
    const rules = new RulesScreen();
    changeView(rules.element);
  }

  static showSettings(newName) {
    playerName = newName;
    const settingsScreen = new SettingsScreen(sets, playerName);
    changeView(settingsScreen.element);
  }


  static showManage(set) {
    const createManage = new ManageScreen(set);
    changeView(createManage.element);
  }

  static showEdit(set) {
    const createEdit = new EditScreen(set);
    changeView(createEdit.element);
  }

  static showGameWrite(set, gameType) {
    const gameWriteScreen = new GameWriteScreen(new GameWriteModel(set, gameType, playerName));
    changeView(gameWriteScreen.element);
    gameWriteScreen.startGame();
  }

}
