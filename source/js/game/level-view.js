import {getLevel} from '../data/data';
import AbstractView from '../view';

const ENTER_KEYCODE = 13;

const drawHeart = (full) => {
  return `<span class="heart">`
};

const drawHeader = (data) => {
  return `
  <header class="header">
    <div>Мир: ${data.level}</div>
    <div>Жизни: ${drawHeart(data.lives >2)}
                ${drawHeart(data.lives >1)}
                ${drawHeart(data.lives >0)}
  </div>
  <div>Время: ${data.time}</div>
  </header>`;
};


export default class LevelView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    const level = getLevel(this.state.level);

    const answerNames = Object.keys(level.answers);
    const answers = answerNames.map((key) => ({key, value: level.answers}));

  return `
   ${drawHeader(this.state)}
    <div class="quest">
      <p class="text">${level.text}</p>
      <input type="text">
      <ul class="answers">
         ${answers.map(({key, value}) => `<li class="answer">${key}.${value}</li>`).join(``
      )}
      </ul>
    </div>
    <small>Для справки введите <i>help</i></small>`.trim();
  }

  bind() {
    const input = this.element.querySelector('input');
           input.onkeydown =(evt) => {
             if (evt.keyCode === ENTER_KEYCODE) {
               const level = getLevel(this.state.level);
               const answer = level.answers[input.value.toUpperCase()];

               if (answer) {
                 this.onAnswer(answer);
               }
             }
           };
 }

  onAnswer(answer) {
   return answer;
  }

}
