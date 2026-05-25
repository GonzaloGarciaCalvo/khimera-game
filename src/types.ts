type AnswerType = {
    id: number; 
    statement: string;
    correctAnswer: string;
    status: 'undone' | 'correct' | 'incorrect';
    options: string[]
};

type UPDATE_ANSWER = 'UPDATE_ANSWER';

type RESET_ANSWERS = 'RESET_ANSWERS';

type UpdateAnswerAction = {
  type: UPDATE_ANSWER;
  payload: {
    questionId: number;
    userAnswer: string;
    status: 'undone' | 'correct' | 'incorrect';
  };
};
type ResetAnswersAction = {
  type: RESET_ANSWERS;
};
type SetInitialAnswers = {
  type: 'SET_INITIAL_ANSWERS';
  payload: AnswerType[];
};

type StatusType = 'undone' | 'correct' | 'incorrect';

type ActionsType = UpdateAnswerAction | ResetAnswersAction | SetInitialAnswers;

type TypeTeam = 'red' | 'blue' | 'yellow';

export type { AnswerType, UpdateAnswerAction, ResetAnswersAction, StatusType, SetInitialAnswers, ActionsType, TypeTeam };