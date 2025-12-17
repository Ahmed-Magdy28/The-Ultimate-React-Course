export const ApiKey = ''; // Please use your own API key
export const ApiUrl = 'http://localhost:4567/questions';
export const Apikeylink = '?apikey=' + ApiKey;
export const SearchToken = '&s=';
export const IdToken = '&i=';
export const FullSearchlink = `${ApiUrl}${Apikeylink}${SearchToken}`;
export const FullIdlink = `${ApiUrl}${Apikeylink}${IdToken}`;
export const TimeoutSeconds = 5;
export const QUIZ_TIMEOUT_MINUTES = 5;
export const QuizTimeoutSeconds = QUIZ_TIMEOUT_MINUTES * 60;
export const FromMilisecondtoSecond = 1000;
export const initialState = {
   questions: [],
   isLoading: false,
   appStatus: '',
   active: null,
   userAnswer: null,
   userPoints: 0,
   totalPoints: 0,
   highScore: 0,
   secondsRemaining: QuizTimeoutSeconds,
};
