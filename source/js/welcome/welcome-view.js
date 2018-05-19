import AbstractView from '../view';

const ENTER_KEYCODE = 13;
const START_COMMAND = 'start';

export default class WelcomeView extends AbstractView {

  get template() {
    return`
  <div class="welcome">
    <p class="title">JapaneseCoach</p>
    <p class="text">About</p>
    <p class="text">Набери в поле ввода <b>${START_COMMAND}</b>, чтобы начать</p>
    <input type="text">
  </div>`.trim();
  }

  bind() {
    const input = this.element.querySelector('input');
    input.onkeydown = (evt) => {
      if (evt.keyCode === ENTER_KEYCODE) {
        const value = input.value || ``;
        if (value.toLowerCase() === START_COMMAND) {
          this.onStart();
        }
      }
    };
  }

  onStart() {

  }
}
