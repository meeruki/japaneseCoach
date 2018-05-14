export const initialState = Object.freeze({
  level: 'level-0',
  lives: 3,
  time: 0
});

export const levels = Object.freeze({
  'level-0': {
    description: 'The answer to life the universe and everything',
    answers: {
      '42': 'level-1'
    }
  },
   'level-1': {
    description: 'So long and thanks for all the ...',
     answers: {
      'FISH': 'level-2'
    }
  }
});
