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
    this.content.onTranslationSyllabaryGameClick = this.clickTranslationSyllabaryGame.bind(this);
    this.content.onTranslationWordGameClick = this.clickTranslationWordGame.bind(this);
    this.content.onSyllabaryWordGameClick = this.clickSyllabaryWordGame.bind(this);
    this.content.onRandomGameClick = this.clickRandomGame.bind(this);
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
  clickTranslationSyllabaryGame(set) {
    Application.showGameWrite(set, GameType.WRITE_SYLLABARY_AND_TRANSLATION);
  }
  clickTranslationWordGame(set) {
    Application.showGameWrite(set, GameType.WRITE_WORD_AND_TRANSLATION);
  }
  clickSyllabaryWordGame(set) {
    Application.showGameWrite(set, GameType.WRITE_WORD_AND_SYLLABARY);
  }
  clickRandomGame(set) {
    Application.showGameWrite(set, GameType.WRITE_RANDOM);
  }

}
