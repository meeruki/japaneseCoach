const INITIAL_GAME = Object.freeze({
  word: 0/* ,
  time: 30*/
});

const generateState = (game) => {
  return Object.assign({}, game);
};

class GameWriteModel {
  constructor(data, gameType, playerName) {
    this.data = data;
    this.gameType = gameType;
    this.playerName = playerName;

    this.restart();
  }

  get state() {
    return this._state;
  }

  goToNextWord() {
    this._state.word++;
  }

  getWord(wordNumber) {
    return this.data.words[wordNumber];
  }
  getCurrentWord() {
    return this.getWord(this._state.word);
  }


  getGameType() {
    return this.gameType;
  }

  restart() {
    this._state = generateState(INITIAL_GAME);
    // this._answers = [];
  }

  isEnd() {
    return this._state.word === this.data.words.length - 1;
  }


  /* get answers() {
    return convertAnswersArr(this._answers);
  }*/

  /* generateTrueAnswer() {
    this._answers.push(generateAnswerStat(true, this._state.time));
  }
*/
  /* generateFalseAnswer() {
    this._answers.push(generateAnswerStat(false, this._state.time));
  }*/

}

export default GameWriteModel;
