import ManageView from './manage-view';
import Application from '../../application';
import {GameType} from '../../data/data';

export default class ManageScreen {
  constructor(set) {
    this.set = set;
    this.content = new ManageView(this.set);
    this.root = document.createElement(`div`);
    this.root.appendChild(this.content.element);

    this.init();
  }

  get element() {
    return this.root;
  }

  init() {
    this.content.onEditClick = this.clickEdit.bind(this);
    this.content.onTranslationGameClick = this.clickTranslationGame.bind(this);
    this.content.onSyllabaryGameClick = this.clickSyllabaryGame.bind(this);
    this.content.onWordGameClick = this.clickWordGame.bind(this);

  }

  clickEdit(set) {
    Application.showEdit(set);
  }

  clickTranslationGame(set) {
    Application.showGameWrite(set, GameType.WRITE_TRANSLATION);
  }
  clickSyllabaryGame(set) {
    Application.showGameWrite(set, GameType.WRITE_SYLLABARY);
  }
  clickWordGame(set) {
    Application.showGameWrite(set, GameType.WRITE_WORD);
  }

}
