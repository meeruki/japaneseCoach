import {changeView} from '../util';
import WelcomeView from './welcome-view';
import App from '../main';


 class Welcome {
  constructor() {
    this.view = new WelcomeView();
  }

  init() {
    changeView(this.view);

    this.view.onStart = () => {
      App.showGame();
    };
  }
}
const welcome = new Welcome();
export default welcome;

