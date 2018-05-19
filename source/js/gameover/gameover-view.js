import AbstractView from '../view';

export default class GameOverView extends AbstractView {
  constructor(isWin) {
    super();
    this.isWin = isWin;
  }


  get template() {
    let message;
    if (this.isWin) {
      message = `<p>УРА!Победа!</p>`
    } else {
      message = `<p>Конец!Повторим!</p>`
    }

    return `
    <div class="end">
     ${message.trim()}
     <div class="repeat"><span class="repeat-action">Да</span>|<span class="repeat-action">Не</a></div>
    </div>`;
  }


   /*   <p>${this.win ? `Победа!` : `${!this.continueGame ? `Проигрыш =(` : `Вы погибли =(` }`}!</p>
      <p>${!this.continueGame ? `Повторим?!` : `Продолжить с последнего уровня?`}</p>*/



  set onRestart(handler) {
    this._onRestart = handler;
  }

  set onExit(handler) {
    this._onExit = handler;
  }



  bind() {
    const options = this.element.querySelectorAll(`span.repeat-action`);
    options[0].onclick = (evt) => {
      evt.preventDefault();

      this._onRestart(this.continueGame);
    };

    options[1].onclick = (evt) => {
      evt.preventDefault();

      this._onExit();
    };
  }
}
