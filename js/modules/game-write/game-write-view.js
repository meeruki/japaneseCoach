import {
  GameType
} from '../../data/data';
import AbstractView from '../abstract-view';
import gameWriteTemplate from '../../block/game-write-template.js';
// import statsTemplate from '../../block/stats';

const handleWriteGame = (element, gameType, currentWord, onAnswer) => {
  const game = element.querySelector(`.game`);
  const gameAnswerButton = game.querySelector(`.game__answer-button`);

  switch (gameType) {
    case GameType.WRITE_TRANSCRIPTION:
      const gameTranscription = game.querySelector(`.game__transcription`);
      gameAnswerButton.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        onAnswer(gameTranscription.value === currentWord.transcription);
      });
      break;
    case GameType.WRITE_SYLLABARY:
      const gameSyllabary = game.querySelector(`.game__syllabary`);
      gameAnswerButton.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        onAnswer(gameSyllabary.value === currentWord.syllabary);
      });

      break;
    case GameType.WRITE_WORD:
      const gameWord = game.querySelector(`.game__word`);
      gameAnswerButton.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        onAnswer(gameWord.value === currentWord.word);
      });
      break;
    default:
      throw new RangeError(`No such type of game`);
  }
};

export default class GameWriteView extends AbstractView {
  constructor(word, gameType /* , answers*/) {
    super();
    this.word = word;
    this.gameType = gameType;
    // this.answers = answers; в template: ${statsTemplate(this.answers)}
  }

  get template() {
    return ` ${gameWriteTemplate(this.word, this.gameType)}`;
  }

  bind() {
    handleWriteGame(this.element, this.gameType, this.word, this.onAnswer);
  }

  onAnswer(answer) {
    return answer;
  }
}
