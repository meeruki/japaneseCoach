import AbstractView from '../abstract-view';
import {isEnterEvent, Keycode} from '../../utils';

export default class EditView extends AbstractView {
  constructor(set) {
    super();
    this.set = set;
  }

  get template() {
    return `<div class="edit">
     <h1 class="edit__title">Edit <div class="edit__set-name">${this.set.name}</div></h1>
     <table class="edit__set">
     <tr>
    <th>word</th>
    <th>translation</th>
    <th>syllabary</th>
  </tr>
    ${this.set.words.map((it) => `<tr><td tabindex="1">${it.word}</td><td tabindex="1">${it.translation} </td><td tabindex="1">${it.syllabary}</td></tr>`).join(``)}</table>

   <div class="edit">
     <div class="edit__additional-wrap">
       <button class="edit__button-add" >+</button>
       <p>add term</p>
    </div>
  </div>
    <button class="edit__button-save" type="submit">save</buttion>
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

    const editHandler = (evt) => {
      this.onCellEditClick(evt.target);
    };
    const editTable = editElement.querySelector(`.edit__set`);
    editTable.addEventListener(`click`, editHandler);
    const setName = editElement.querySelector(`.edit__set-name`);
    setName.addEventListener(`click`, editHandler);


    const submitButton = editElement.querySelector(`.edit__button-save`);
    submitButton.addEventListener(`click`, (evt) => {
      onSubmitClick(evt);
    });
    const enterHandler = (evt) => {
      isEnterEvent(evt, onSubmitClick);
    };
    document.addEventListener(`keydown`, enterHandler);
    const onSubmitClick = () => {
      document.removeEventListener(`keydown`, enterHandler);
      this.onSubmitButtonClick(this.set);
    };

    editTable.addEventListener(`keydown`, (evt) => {
      if (evt.keyCode === Keycode.ENTER) {
        evt.stopPropagation();
        this.onCellEditClick(evt.target);
      }
    });
  }

  onCellEditClick(element) {
    return element;
  }

  onAddTermClick() {
  }

  onSubmitButtonClick(set) {
    return set;
  }

}
