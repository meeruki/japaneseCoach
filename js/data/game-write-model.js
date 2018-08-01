const INITIAL_GAME = Object.freeze({
  word: 0/* ,
  time: 30*/
});

const generateState = (game) => {
  return Object.assign({}, game);
};


class GameWriteModel {
  constructor(set, gameType) {
    this.set = set;
    this.gameType = gameType;

    this.restart();
  }

  get state() {
    return this._state;
  }

  goToNextWord() {
    this._state.word++;
  }

  getWord(wordNumber) {
    return this.set.words[wordNumber];
  }
  getCurrentWord() {
    return this.getWord(this._state.word);
  }

  getGameType() {
    return this.gameType;
  }

  restart() {
    this._state = generateState(INITIAL_GAME);
    this._answers = [];
  }

  isEnd() {
    return this._state.word === this.set.words.length - 1;
  }


  get answers() {
    return this._answers;
  }

  generateTrueAnswer() {
    this._answers.push(true);
  }

  generateFalseAnswer() {
    this._answers.push(false);
  }

}

export default GameWriteModel;
