import SettingsScreen from './modules/settings/settings-screen';
import ManageScreen from './modules/manage/manage-screen';
import EditScreen from './modules/edit/edit-screen';
import GameWriteScreen from './modules/game-write/game-write-screen';
import GameWriteModel from './data/game-write-model';

const main = document.querySelector(`main.central`);

const changeView = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);
};

let sets = [{
  name: `animals`,
  words: [{
    word: `cat`,
    translation: `кот`,
    syllabary: `kot`
  },
  {
    word: `dog`,
    translation: `собака`,
    syllabary: `sobaka`
  },
  {
    word: `mouse`,
    translation: `мышь`,
    syllabary: `mish`
  },
  {
    word: `earth`,
    translation: `земля`,
    syllabary: `zemlya`
  },
  {
    word: `dacha`,
    translation: `дача`,
    syllabary: `dacha`
  },
  {
    word: `summer`,
    translation: `лето`,
    syllabary: `leto`
  },
  {
    word: `winter`,
    translation: `зима`,
    syllabary: `zima`
  },
  {
    word: `three`,
    translation: `дерево`,
    syllabary: `derevo`
  }
  ]
},
{
  name: `creatures`,
  words: [{
    word: `flyingPurplePeopleEater`,
    translation: `человекоед`,
    syllabary: `chelovekoed`
  }]
}
];

export default class Application {

  static start() {
    const settingsScreen = new SettingsScreen(sets);
    changeView(settingsScreen.element);
  }

  static showSettings() {
    const settingsScreen = new SettingsScreen(sets);
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
    const gameWriteScreen = new GameWriteScreen(new GameWriteModel(set, gameType));
    changeView(gameWriteScreen.element);
    gameWriteScreen.startGame();
  }

}
