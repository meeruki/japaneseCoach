import {initialGame, nextLevel, Result, setLives} from '../data/data';
import LevelView from './level-view';
import {changeView} from '../util';
import GameOverView from '../gameover/gameover-view';

class Game {
  constructor(state = initialGame){
    this.state = state;
    this.view =new LevelView(this.state);
  }

  init(){
    changeView(this.view);

    this.view.onAnswer = (answer) => {
      switch (answer.result) {
        case Result.DIE:
          this.view = new GameOverView(false);
          this.view.onRepeat = () => {
            this.state = setLives(this.state, this.state.lives - 1);
            this.view = new LevelView(this.state);
            this.init();
          };
          break;
        case Result.WIN:
          this.view = new GameOverView(true);
          this.view.onRepeat = () => {
            this.state = initialGame;
            this.view = new LevelView(this.state);
            this.init();
          };
          break;
        case Result.NEXT:
          this.state = nextLevel(this.state);
          this.view = new LevelView(this.state);
          break;

        default:
          throw new Error(`Unknown result ${answer.result}`);
      }

      this.init();
    };
  }
}

const game = new Game();
export default game;
