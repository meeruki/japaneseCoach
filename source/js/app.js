import screenTemplate from './screen-template'
import {getElementFromTemplate} from './utils'
import {save, load} from './backend'

const container = document.querySelector('.central__content');

/* обработчик успеха*/
let successHandler = (data) => {
  console.log(data);
  container.appendChild(getElementFromTemplate(screenTemplate(data)));
};
/* стиль обработчика ошибки*/
let errorHandlerStyle = (nodeName) => {
  nodeName.style.zIndex = '100';
  nodeName.style.margin = '0 auto';
  nodeName.style.textAlign = 'center';
  nodeName.style.backgroundColor = 'red';
  nodeName.style.position = 'absolute';
  nodeName.style.left = 0;
  nodeName.style.right = 0;
  nodeName.style.fontSize = '30px';
};
/* обработчик ошибки*/
let errorHandler = (errorMessage) => {
  var node = document.createElement('div');
  errorHandlerStyle(node);
  node.textContent = errorMessage;
  document.body.insertAdjacentElement('afterbegin', node);
};

/* обработчик отправки формы*/
/*let questionsForm = document.querySelector('.questions__form');
questionsForm.addEventListener('submit', function (evt) {
  save(new FormData(questions), function () {
    answerForm.reset();
  });
  evt.preventDefault();
});*/

export let app = () => {
  load(successHandler, errorHandler);
};
