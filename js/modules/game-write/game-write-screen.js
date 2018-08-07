import GameWriteView from './game-write-view';
import Application from '../../application';

export default class GameWriteScreen {
  constructor(model) {
    this.model = model;
    this.content = new GameWriteView(this.model.getCurrentWord(), this.model.getGameType(), this.model.answers);

    this.root = document.createElement(`div`);
    this.root.appendChild(this.content.element);
  }

  get element() {
    return this.root;
  }

  startGame() {
    this.changeLevel();
  }

  answer(answer) {
    if (answer) {
      this.model.generateTrueAnswer();
    } else {
      this.model.generateFalseAnswer();
    }
    if (this.model.isEnd()) {
      this.endGame();
    } else {
      this.model.goToNextWord();
      this.startGame();
    }
  }

  /* restart() {
    Application.showModalConfirm();
  }*/

  changeLevel() {
    const level = new GameWriteView(this.model.getCurrentWord(), this.model.getGameType(), this.model.answers);
    level.onAnswer = this.answer.bind(this);
    this.changeContentView(level);
    const currentInput = this.root.querySelector(`input`);
    currentInput.focus();
  }

  endGame() {
    Application.showManage(this.model.set);
    // Application.showStats(this.model.state, this.model.answers, this.model.playerName);
  }

  changeContentView(view) {
    this.root.replaceChild(view.element, this.content.element);
    this.content = view;
  }
}
