export const useReducerFunc = (state, action) => {
   const question = state.questions.at(state.active);
   switch (action.type) {
      case 'dataRecived':
         return {
            ...state,
            questions: action.data,
            isLoading: false,
            status: 'ready',
         };
      case 'dataFailed':
         return {
            ...state,
            status: 'error',
            error: action.error,
         };
      case 'setloading':
         return { ...state, isLoading: action.payload, status: 'loading' };
      case 'setError':
         return { ...state, error: action.error };
      case 'startQuiz':
         return { ...state, status: 'active', active: 0 };
      case 'nextQuestion':
         return { ...state, active: state.active + 1, userAnswer: null };
      case 'prevQuestion':
         return {
            ...state,
            active: state.active !== 0 ? state.active - 1 : state.active,
         };
      case 'newAnswer':
         return {
            ...state,
            userAnswer: action.payload,
            userPoints:
               action.payload === question.correctOption
                  ? state.userPoints + question.points
                  : state.userPoints,
         };
      case 'addPoints':
         return { ...state, userPoints: state.userPoints + action.payload };
      case 'calcTotalPoints':
         return { ...state, totalPoints: action.payload };
      case 'quizFinished':
         return {
            ...state,
            status: 'finished',
            highScore:
               state.userPoints > state.highScore
                  ? state.userPoints
                  : state.highScore,
         };
      case 'resetQuiz':
         return {
            ...state,
            status: 'active',
            active: 0,
            userAnswer: null,
            userPoints: 0,
         };
      case 'tick':
         return {
            ...state,
            secondsRemaining:
               state.secondsRemaining !== 0 ? state.secondsRemaining - 1 : 0,
            status: state.secondsRemaining === 0 ? 'finished' : state.status,
         };

      default:
         throw new Error('Action is unknown');
   }
};
