import AbstractView from '../abstract-view';

export default class EditView extends AbstractView {
  constructor(set) {
    super();
    this.set = set;
  }

  get template() {
    return `<div class="edit">
     <h1 class="edit__title">${this.set.name}</h1>
     <table class="edit__set">
     <tr>
    <th>word</th>
    <th>translation</th>
    <th>syllabary</th>
  </tr>
    ${this.set.words.map((it) => `<tr><td>${it.word}</td><td>${it.translation} </td><td>${it.syllabary}</td></tr>`).join(``)}</table>

   <div class="edit">
     <div class="edit__additional-wrap">
       <button class="edit__button-add" >+</button>
       <p>add term</p>
    </div>
  </div>
    <button class="edit__button-save">save</buttion>
  </div>`;
  }

  bind() {
    const editElement = this.element.querySelector(`.edit`);
    const addTermButton = editElement.querySelector(`.edit__button-add`);


    const onAddTermButtonClick = (evt) => {
      evt.preventDefault();
      this.onAddTermClick();
    };
    addTermButton.addEventListener(`click`, (evt) => {
      onAddTermButtonClick(evt);
    });
  }

  onAddTermClick() {
  }

}
