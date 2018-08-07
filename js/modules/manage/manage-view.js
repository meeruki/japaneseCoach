import AbstractView from '../abstract-view';


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
   <div class="manage__games-wrap">
     <button class="manage__button-game write-translation">write translation</buttion>
     <button class="manage__button-game write-syllabary">write syllabary</buttion>
     <button class="manage__button-game write-word">write word</buttion>
  </div>
  <table class="manage__set">
  <tr>
    <th>word</th>
    <th>translation</th>
    <th>syllabary</th>
  </tr>
    ${this.set.words.map((it) => `<tr><td>${it.word}</td><td>${it.translation} </td><td>${it.syllabary}</td></tr>`).join(``)}</table>
  </div>`;
  }

  bind() {
    const manageElement = this.element.querySelector(`.manage`);
    const editButton = manageElement.querySelector(`.manage__button-edit`);

    const onEditButtonClick = (evt) => {
      evt.preventDefault();
      this.onEditClick(this.set);
    };

    editButton.addEventListener(`click`, (evt) => {
      onEditButtonClick(evt);
    });

    const translationGameButton = manageElement.querySelector(`.write-translation`);
    const syllabaryGameButton = manageElement.querySelector(`.write-syllabary`);
    const wordGameButton = manageElement.querySelector(`.write-word`);

    const onTranslationGameButtonClick = (evt) => {
      evt.preventDefault();
      this.onTranslationGameClick(this.set);
    };

    translationGameButton.addEventListener(`click`, (evt) => {
      onTranslationGameButtonClick(evt);
    });

    const onSyllabaryGameButtonClick = (evt) => {
      evt.preventDefault();
      this.onSyllabaryGameClick(this.set);
    };

    syllabaryGameButton.addEventListener(`click`, (evt) => {
      onSyllabaryGameButtonClick(evt);
    });

    const onWordGameButtonClick = (evt) => {
      evt.preventDefault();
      this.onWordGameClick(this.set);
    };

    wordGameButton.addEventListener(`click`, (evt) => {
      onWordGameButtonClick(evt);
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

}
