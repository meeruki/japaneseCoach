import {GameType} from '../data/data';

const gameWriteTemplate = (word, gameType) => {
  switch (gameType) {
    case GameType.WRITE_TRANSLATION:
      return `<form class="game">
      <h2 class="game__title">Enter translation</h2>
      <table class="game__table">
        <tr>
          <td>Word:</td>
          <td>${word.word}</td>
        </tr>
        <tr>
          <td>Syllabary:</td>
          <td>${word.syllabary}</td>
        </tr>
        <tr>
          <td>Translation:</td>
          <td>
            <input type="text" autofocus>
          </td>
        </tr>
      </table>
      <button class="game__answer-button" disabled>submit</button>
  </form>`;
    case GameType.WRITE_SYLLABARY:
      return `<form class="game">
      <h2 class="game__title">Enter syllabary</h2>
      <table class="game__table">
        <tr>
          <td>Word:</td>
          <td>${word.word}</td>
        </tr>
        <tr>
          <td>Translation:</td>
          <td>${word.translation}</td>
        </tr>
        <tr>
          <td>Syllabary:</td>
          <td>
            <input type="text" autofocus>
          </td>
        </tr>
      </table>
      <button class="game__answer-button" disabled>submit</button>
  </form>`;
    case GameType.WRITE_WORD:
      return `<form class="game">
      <h2 class="game__title">Enter word</h2>
      <table class="game__table">
        <tr>
          <td>Translation:</td>
          <td>${word.translation}</td>
        </tr>
        <tr>
          <td>Syllabary:</td>
          <td>${word.syllabary}</td>
        </tr>
        <tr>
          <td>Word:</td>
          <td>
            <input type="text" autofocus>
          </td>
        </tr>
      </table>
      <button class="game__answer-button" disabled>submit</button>
  </form>`;
    default:
      throw new RangeError(`No such type of game`);
  }
};

export default gameWriteTemplate;
