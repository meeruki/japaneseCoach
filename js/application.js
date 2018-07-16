import RulesScreen from './modules/rules/rules-screen.js';
import SettingsScreen from './modules/settings/settings-screen.js';
import CreateScreen from './modules/create/create-screen.js';
import {sets} from './data/data-sets.js';
import SettingsModel from './data/settings-model.js';
// import Loader from './loader.js';


const main = document.querySelector(`main.central`);

// let questData;

const changeView = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);
};


export default class Application {

  static start() {
    const rules = new RulesScreen();
    changeView(rules.element);
    // Loader.loadData().
    // then((data) => {
    //   questData = data;
    //  }).
    // then(() => Application.showGreetingAnimation()).
    // catch(Application.showError);
  }

  static showSettings(playerName) {
    const settingsScreen = new SettingsScreen(new SettingsModel(sets, playerName));
    changeView(settingsScreen.element);
  }

  static showCreate() {
    const createScreen = new CreateScreen();
    changeView(createScreen.element);
  }


}
