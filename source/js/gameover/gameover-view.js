import AbstractView from '../view';

export default class GameOverView extends AbstractView {
  constructor(win, continueGame = true) {
    super();
    this.win = win;
    this.continueGame = continueGame;
  }


   get template() {
    return `
    <div class="end">
      <p>${this.win ? `Победа!` : `${!this.continueGame ? `Проигрыш =(` : `Вы погибли =(` }`}!</p>
        <p>${this.win ? `Повторим?!` : `Продолжить с последнего уровня?`}</p>
      <div class="repeat"><span class="repeat-action">Да</span>|<span class="repeat-action">Не</a></div>
    </div>`;
  }


  bind() {
    const options = this.element.querySelectorAll(`span.repeat-action`);
    options[0].onclick = (evt) => {
      evt.preventDefault();
      this.onRepeat();
    };

    options[1].onclick = (evt) => {
      evt.preventDefault();

      this.onExit();
    };
  }

  onRepeat() {

  }
   onExit() {

  }

}
