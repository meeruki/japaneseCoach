import {GameType} from '../../data/data';
import AbstractView from '../abstract-view';
import gameWriteTemplate from '../../blocks/game-write-template';
// import statsTemplate from '../../blocks/stats';

const handleWriteGame = (element, gameType, currentWord, onAnswer) => {
  const game = element.querySelector(`.game`);
  const gameAnswerButton = game.querySelector(`.game__answer-button`);
  const singleGameInput = game.querySelector(`.game__single-input`);
  const doubleGameWordInput = game.querySelector(`.game__word`);
  const doubleGameTranslationInput = game.querySelector(`.game__translation`);
  const doubleGameSyllabaryInput = game.querySelector(`.game__syllabary`);

  const addSingleGameListeners = (property) => {
    gameAnswerButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      onAnswer(singleGameInput.value === property);
    });
  };

  const addDoubleGameListeners = (firstQuestion, secondQuestion) => {
    gameAnswerButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      if (doubleGameWordInput && doubleGameTranslationInput) {
        onAnswer(doubleGameWordInput.value === firstQuestion && doubleGameTranslationInput.value === secondQuestion);
      } else if (doubleGameSyllabaryInput && doubleGameTranslationInput) {
        onAnswer(doubleGameSyllabaryInput.value === firstQuestion && doubleGameTranslationInput.value === secondQuestion);
      } else if (doubleGameWordInput && doubleGameSyllabaryInput) {
        onAnswer(doubleGameWordInput.value === firstQuestion && doubleGameSyllabaryInput.value === secondQuestion);
      }
    });
  };

  switch (gameType) {
    case GameType.WRITE_TRANSLATION:
      addSingleGameListeners(currentWord.translation);
      break;
    case GameType.WRITE_SYLLABARY:
      addSingleGameListeners(currentWord.syllabary);
      break;
    case GameType.WRITE_WORD:
      addSingleGameListeners(currentWord.word);
      break;
    case GameType.WRITE_SYLLABARY_AND_TRANSLATION:
      addDoubleGameListeners(currentWord.syllabary, currentWord.translation);
      break;
    case GameType.WRITE_WORD_AND_TRANSLATION:
      addDoubleGameListeners(currentWord.word, currentWord.translation);
      break;
    case GameType.WRITE_WORD_AND_SYLLABARY:
      addDoubleGameListeners(currentWord.word, currentWord.syllabary);
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

