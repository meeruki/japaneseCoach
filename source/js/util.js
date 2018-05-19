/* вставляет элементы в html*/
   export const getElementFromTemplate = (template) => {
     const container = document.createElement(`template`);
     container.innerHTML = template;
     return container.content;
    };

const main = document.getElementById('main');
/*отрисовывает представление в DOM*/
export const changeView = (view) => {
  main.innerHTML = '';
  main.appendChild(view.element);
}

