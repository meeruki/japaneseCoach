import AbstractView from '../abstract-view';

const checkSelectedInputs = (evt, firstInput, secondInput, randomInput) => {
  randomInput.checked = false;
  if (firstInput.checked && secondInput.checked) {
    evt.preventDefault();
  }
};

export default class ManageView extends AbstractView {
  constructor(set) {
    super();
    this.set = set;
  }

  get template() {
    return `<div class="manage">
  <div class="manage__header-wrap">
    <button class="manage__button-edit">edit</buttion>
  </div>
  <form class="manage__games-wrap">
    <label for="translation">show translation</label> 
    <input name="translation" id="translation" type="checkbox">
    <label for="syllabary">show syllabary</label> 
    <input name="syllabary" id="syllabary" type="checkbox">
    <label for="word">show word</label> 
    <input name="word" id="word" type="checkbox">
    <label for="random">show random</label> 
    <input name="random" id="random" type="checkbox">
    <button class="manage__submit">go!</button>   
  </form>
  <table class="manage__set">
    <tr>
      <th>word</th>
      <th>translation</th>
      <th>syllabary</th>
    </tr>
    ${this.set.words.map((it) => `
    <tr>
      <td>${it.word}</td>
      <td>${it.translation} </td>
      <td>${it.syllabary}</td>
    </tr>
    `).join(``)}
  </table>
</div>`;
  }

  bind() {
    const manageElement = this.element.querySelector(`.manage`);
    const editButton = manageElement.querySelector(`.manage__button-edit`);
    const translationInput = manageElement.querySelector(`#translation`);
    const syllabaryInput = manageElement.querySelector(`#syllabary`);
    const wordInput = manageElement.querySelector(`#word`);
    const randomInput = manageElement.querySelector(`#random`);
    const goButton = manageElement.querySelector(`.manage__submit`);

    const onEditButtonClick = (evt) => {
      evt.preventDefault();
      this.onEditClick(this.set);
    };
    editButton.addEventListener(`click`, (evt) => {
      onEditButtonClick(evt);
    });

    const onRandomInputClick = () => {
      if (translationInput.checked || syllabaryInput.checked || wordInput.checked) {
        translationInput.checked = false;
        syllabaryInput.checked = false;
        wordInput.checked = false;
      }
    };
    randomInput.addEventListener(`click`, (evt) => {
      onRandomInputClick(evt);
    });
    translationInput.addEventListener(`click`, (evt) => {
      checkSelectedInputs(evt, syllabaryInput, wordInput, randomInput);
    });
    syllabaryInput.addEventListener(`click`, (evt) => {
      checkSelectedInputs(evt, translationInput, wordInput, randomInput);
    });
    wordInput.addEventListener(`click`, (evt) => {
      checkSelectedInputs(evt, syllabaryInput, translationInput, randomInput);
    });

    const onGoButtonClick = (evt) => {
      evt.preventDefault();
      if (randomInput.checked) {
        this.onRandomGameClick(this.set);
      } else if (translationInput.checked) {
        if (syllabaryInput.checked) {
          this.onTranslationSyllabaryGameClick(this.set);
        } else if (wordInput.checked) {
          this.onTranslationWordGameClick(this.set);
        } else {
          this.onTranslationGameClick(this.set);
        }
      } else if (syllabaryInput.checked) {
        if (wordInput.checked) {
          this.onSyllabaryWordGameClick(this.set);
        } else {
          this.onSyllabaryGameClick(this.set);
        }
      } else if (wordInput.checked) {
        this.onWordGameClick(this.set);
      }
    };

    goButton.addEventListener(`click`, (evt) => {
      onGoButtonClick(evt);
    });
  }

  onEditClick(set) {
    return set;
  }
  onTranslationGameClick(set) {
    return set;
  }
  onSyllabaryGameClick(set) {
    return set;
  }
  onWordGameClick(set) {
    return set;
  }
  onTranslationSyllabaryGameClick(set) {
    return set;
  }
  onTranslationWordGameClick(set) {
    return set;
  }
  onSyllabaryWordGameClick(set) {
    return set;
  }
  onRandomGameClick(set) {
    return set;
  }

}
