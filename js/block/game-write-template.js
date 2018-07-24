import {GameType} from '../data/data';

const gameWriteTemplate = (word, gameType) => {
  switch (gameType) {
    case GameType.WRITE_TRANSCRIPTION:
      return `<div class="game">
      <h2 class="game__title">Enter transcription</h2>
      <table class="game__table">
        <tr>
          <td>Word:</td>
          <td class="game__word">${word.word}</td>
        </tr>
        <tr>
          <td>Syllabary:</td>
          <td class="game__syllabary">${word.syllabary}</td>
        </tr>
        <tr>
          <td>Transcription:</td>
          <td>
            <input class="game__transcription">
          </td>
        </tr>
      </table>
      <button class="game__answer-button">submit</button>
  </div>`;
    case GameType.WRITE_SYLLABARY:
      return `<div class="game">
      <h2 class="game__title">Enter syllabary</h2>
      <table class="game__table">
        <tr>
          <td>Word:</td>
          <td class="game__word">${word.word}</td>
        </tr>
        <tr>
          <td>Transcription:</td>
          <td class="game__transcription">${word.transcription}</td>
        </tr>
        <tr>
          <td>Syllabary:</td>
          <td>
            <input class="game__syllabary">
          </td>
        </tr>
      </table>
      <button class="game__answer-button">submit</button>
  </div>`;
    case GameType.WRITE_WORD:
      return `<div class="game">
      <h2 class="game__title">Enter word</h2>
      <table class="game__table">
        <tr>
          <td>Transcription:</td>
          <td class="game__transcription">${word.transcription}</td>
        </tr>
        <tr>
          <td>Syllabary:</td>
          <td class="game__syllabary">${word.syllabary}</td>
        </tr>
        <tr>
          <td>Word:</td>
          <td>
            <input class="game__word">
          </td>
        </tr>
      </table>
      <button class="game__answer-button">submit</button>
  </div>`;
    default:
      throw new RangeError(`No such type of game`);
  }
};

export default gameWriteTemplate;
