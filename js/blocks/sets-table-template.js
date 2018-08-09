const setsTableTemplate = (sets) => {

  return `<table class="sets"><caption class="sets__caption">study sets:</caption>${sets.map((it, index) => `<tr><td class="sets__item${index + 1}">${it.name}</td><td class="sets__quantity
">${it.words.length} words</td></tr>`).join(``)}</table>`;
};

export default setsTableTemplate;
