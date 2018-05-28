export const initialGame = {
  level: 0,
  lives: 3,
  time: 0
};

export const setLives = (game, lives) => {
  if (lives < 0) {
    throw new RangeError('Can not set negative lives');
  }
  game = Object.assign({}, game);
  game.lives = lives;
  return game;
};

export const getLevel = (num) => quest[`level-${num}`];

export const nextLevel = (state) => {
  const next = state.level + 1;
  if(!getLevel(next)) {
    throw new RangeError(`can not find level ${next}`);
  }
  state = Object.assign({}, state);
  state.level = next;
  return state;
};

const LEFT = 'LEFT';
const RIGHT = 'RIGHT';
const JUMP = 'JUMP';
const ONE = '1';
const TWO = '2';
const THREE = '3';
const FOUR = '4';


export const Action = {
  LEFT, RIGHT, JUMP, ONE, TWO, THREE, FOUR
};

export const Result = {
  DIE: 'die',
  NOOP: 'noop',
  NEXT: 'next',
  WIN: 'win'
};


export const tick = (game) => {
  game = Object.assign({}, game);
  game.time++;
  return game;
};


export const quest = {
  'level-0': {
    text: `Вас зовут Луиджи Марио, вы водопроводчик, но сейчас перед вами стоит очень важная миссия — спасти принцессу
    Грибного Королевства Тоадстул Пич. Её похитил злой повелитель черепах Боузер и вы отправились в Грибное Королевство,
    чтобы победить Боузера и освободить принцессу. Вы отправляетесь в первый замок, но, чтобы в него попасть нужно
    преодолеть несколько препятствий. Вы стоите посреди на одной из равнин Грибного Королевства и видите как на вас
    стремительно несется хмурый гриб вашего роста. Нужно срочно что-то предпринять`,
    answers: {
      [LEFT]: {
        result: Result.DIE,
        description: `Вы побежите влево, от гриба`
      },
      [RIGHT]: {
        result: Result.DIE,
        description: `Вы побежите вправо, прямо на гриб`
      },
      [JUMP]: {
        result: Result.NEXT,
        description: `Вы прыгнете вверх`
      },
    }
  },
  'level-1': {
    text: `Теперь, когда угроза быть убитым грибом миновала, вы можете спокойно оглядеться по сторонам. Вы видите что
    над вами прямо в двумерном небе висят кирпичные блоки, которые перемежаются с непонятными металлическими
    конструкциями. Что вы предпримете?`,
    answers: {
      [JUMP]: {
        result: Result.NEXT,
        description: `Как что, конечно же подпрыгну и со всей силы ударюсь головой о железяку!`
      }
    }
  },
  'level-2': {
    text: `Вы проходите немного вперед и снова видите над головой кирпичную кладку. Вы хотите проверить свои новые
    силы и со всего размаху бъетесь об нее головой. На этот раз кирпичи разлетаются во все стороны. Вы начинаете
    радостно прыгать и разносить головой все кирпичи, но случайно ударяетесь о еще одну металлическую штуку и видите
    как из нее вырастает цветок. Ваши действия?`,
    answers: {
      [1]: {
        result: Result.WIN,
        description: `Конечно же съесть его!`
      }
    }
  }
};


