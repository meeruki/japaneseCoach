import {GameType} from '../data/data';

const singleGameTemplate = (question, firstHint, secondHint, firstHintName, secondHintName) => {
  let gameTable = `<tr>
          <td>${firstHintName}:</td>
          <td>${firstHint}</td>
        </tr>
        <tr>
          <td>${secondHintName}:</td>
          <td>${secondHint}</td>
        </tr>
        <tr>
          <td>${question}:</td>
          <td>
            <input class="game__single-input" type="text" autofocus>
          </td>
        </tr>`;
  return `<form class="game">
      <h2 class="game__title">Enter ${question}</h2>
      <table class="game__table">
      ${gameTable} 
      </table>
      <button class="game__answer-button">submit</button>
  </form>`;
};


const doubleGameTemplate = (hintName, hint, firstQuestion, secondQuestion) => {
  let gameTable = `<tr>
          <td>${hintName}</td>
          <td>${hint}</td>
        </tr>
        <tr>
          <td>${firstQuestion}:</td>
            <td>
            <input type="text" class="game__${firstQuestion}" autofocus>
          </td>
        </tr>
        <tr>
          <td>${secondQuestion}</td>
          <td>
            <input type="text" class="game__${secondQuestion}" autofocus>
          </td>
        </tr>`;
  return `<form class="game">
      <h2 class="game__title">Enter ${firstQuestion} and ${secondQuestion}</h2>
      <table class="game__table">
      ${gameTable} 
      </table>
      <button class="game__answer-button">submit</button>
  </form>`;
};
const gameWriteTemplate = (currentWord, gameType) => {
  const translation = `translation`;
  const syllabary = `syllabary`;
  const word = `word`;
  switch (gameType) {
    case GameType.WRITE_TRANSLATION:
      return singleGameTemplate(translation, currentWord.word, currentWord.syllabary, word, syllabary);
    case GameType.WRITE_SYLLABARY:
      return singleGameTemplate(syllabary, currentWord.word, currentWord.translation, word, translation);
    case GameType.WRITE_WORD:
      return singleGameTemplate(word, currentWord.syllabary, currentWord.translation, syllabary, translation);
    case GameType.WRITE_WORD_AND_TRANSLATION:
      return doubleGameTemplate(syllabary, currentWord.syllabary, word, translation);
    case GameType.WRITE_WORD_AND_SYLLABARY:
      return doubleGameTemplate(translation, currentWord.translation, word, syllabary);
    case GameType.WRITE_SYLLABARY_AND_TRANSLATION:
      return doubleGameTemplate(word, currentWord.word, syllabary, translation);
    default:
      throw new RangeError(`No such type of game`);
  }
};

export default gameWriteTemplate;
