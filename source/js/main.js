import welcome from './welcome/welcome';
import game from './game/game'

const ControllerID = {
  WELCOME: '',
  GAME: 'game'
/*  WIN: 'die',
  DIE: 'win',*/
};

const getControllerIDFromHash = (hash) => hash.replace('#', '');

class App {
  constructor() {
    this.routes = {
      [ControllerID.WELCOME]: welcome,
      [ControllerID.GAME]: game
    };

    window.onhashchange = () => {
      this.changeController(getControllerIDFromHash(location.hash));
    };
  }

  changeController(route = '') {
    const controller = this.routes[route];
    controller.init();
  }

  init() {
    this.changeController(getControllerIDFromHash(location.hash));
  }

  showWelcome() {
    location.hash =ControllerID.WELCOME;
  }

  showGame(){
    location.hash = ControllerID.GAME;
  }

}


const app = new App();
app.init();

export default app;


