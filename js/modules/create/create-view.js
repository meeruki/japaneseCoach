import AbstractView from '../abstract-view';
import createSetTemplate from '../../block/create-set-template';


export default class CreateView extends AbstractView {

  get template() {
    return `<div class="create">
    <form class="create__form">
      <div class="create__header-wrap">
        <h2 class="create__title">create set</h2>
        <button class="create__button-submit" type="submit" disabled>Done</button>
      </div>
      <input class="create__form-title" id="create__form-title">
      <label for="create__form-title">title</label>
    ${createSetTemplate()}${createSetTemplate()}
    </form>
    <div class="create__additional-wrap">
      <button class="create__button-add" >+</button>
      <p>add term</p>
    </div>
  </div>`;
  }

  bind() {
    const createElement = this.element.querySelector(`.create`);
    const createSetForm = createElement.querySelector(`.create__form`);
    const addTermButton = createElement.querySelector(`.create__button-add`);

    const onSubmitButtonClick = (evt) => {
      evt.preventDefault();
      this.onNextClick();
    };

    createSetForm.addEventListener(`submit`, (evt) => {
      onSubmitButtonClick(evt);
    });


    const onAddTermButtonClick = (evt) => {
      evt.preventDefault();
      this.onAddTermClick();
    };

    addTermButton.addEventListener(`click`, (evt) => {
      onAddTermButtonClick(evt);
    });
  }

  onNextClick() {
    // submit
  }

  onAddTermClick() {
  }
}
