/* вставляет элементы в html*/
   export const getElementFromTemplate = (template) => {
     const container = document.createElement(`template`);
     container.innerHTML = template;
     return container.content;
    };



