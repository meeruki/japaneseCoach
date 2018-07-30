import {
  GameType
} from '../../data/data';
import AbstractView from '../abstract-view';
import gameWriteTemplate from '../../blocks/game-write-template.js';
// import statsTemplate from '../../blocks/stats';

const handleWriteGame = (element, gameType, currentWord, onAnswer) => {
  const game = element.querySelector(`.game`);
  const gameAnswerButton = game.querySelector(`.game__answer-button`);
  const gameInput = game.querySelector(`input`);

  gameInput.addEventListener(`input`, () => {
    gameAnswerButton.disabled = !gameInput.value.trim().length;
  });

  const addGameListeners = (property) => {
    gameAnswerButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      onAnswer(gameInput.value === property);
    });
  };

  switch (gameType) {
    case GameType.WRITE_TRANSLATION:
      addGameListeners(currentWord.translation);
      break;
    case GameType.WRITE_SYLLABARY:
      addGameListeners(currentWord.syllabary);
      break;
    case GameType.WRITE_WORD:
      addGameListeners(currentWord.word);
      break;
    default:
      throw new RangeError(`No such type of game`);
  }
};

export default class GameWriteView extends AbstractView {
  constructor(word, gameType, answers) {
    super();
    this.word = word;
    this.gameType = gameType;
    this.answers = answers;
    // в template: ${statsTemplate(this.answers)}
  }

  get template() {

    return `${gameWriteTemplate(this.word, this.gameType)}`;
  }

  bind() {
    handleWriteGame(this.element, this.gameType, this.word, this.onAnswer);
  }

  onAnswer(answer) {
    return answer;
  }
}
