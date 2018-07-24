import AbstractView from '../abstract-view';

const resetForm = (button, input) => {
  button.disabled = true;
  input.value = ``;
};

export default class RulesView extends AbstractView {

  get template() {
    return `<div class="rules">
    <h1 class="rules__title">App name</h1>
    <p class="rules__description">Сreate a study set or use an existing one.<br>
      Select game type.<br>
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="your name" autofocus>
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>`;
  }

  bind() {
    const rulesForm = this.element.querySelector(`.rules__form`);
    const rulesButton = rulesForm.querySelector(`.rules__button`);
    const rulesInput = rulesForm.querySelector(`.rules__input`);

    const onRulesInputChange = () => {
      rulesButton.disabled = !rulesInput.value.trim().length;
    };

    rulesInput.addEventListener(`input`, onRulesInputChange);

    const onSubmitButtonClick = (evt) => {
      evt.preventDefault();
      const newName = rulesInput.value;
      this.onNextClick(newName);
      resetForm(rulesButton, rulesInput);

      rulesInput.removeEventListener(`input`, onRulesInputChange);
      rulesForm.removeEventListener(`submit`, onSubmitButtonClick);
    };

    rulesForm.addEventListener(`submit`, (evt) => {
      onSubmitButtonClick(evt);
    });
  }

  onNextClick(name) {
    return name;
  }
}
