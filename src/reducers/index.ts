import type { ActionsType, AnswerType, StatusType } from "../types";

//type TypeTeam = 'red' | 'blue' | 'yellow';

/* const calculateInitialAnswers = (team: TypeTeam): AnswerType[] => {
  if(team === 'red') return redQuestions;
  if(team === 'blue') return blueQuestions;
  if(team === 'yellow') return yellowQuestions;
  return [];
}; */

const UPDATE_ANSWER = 'UPDATE_ANSWER';
const RESET_ANSWERS = 'RESET_ANSWERS';
const SET_INITIAL_ANSWERS = 'SET_INITIAL_ANSWERS';

const answerReducer = (state: AnswerType[], action: ActionsType ): AnswerType[] => {
    switch (action.type) {
      case SET_INITIAL_ANSWERS:
        return action.payload;
      case UPDATE_ANSWER:
        return state.map(answer =>
          answer.id === action.payload.questionId
            ? { ...answer, status: action.payload.status }
            : answer
        );
      case RESET_ANSWERS:
        return []
    }
  };  

  const updateAnswer = (questionId: number, userAnswer: string, status: StatusType, dispatch: (action: ActionsType) => void) => {
    dispatch({
      type: UPDATE_ANSWER,
      payload: {
        questionId,
        userAnswer,
        status,
      },
    });
  };

  const resetAnswers = (setTeam: (team: string) => void, dispatch: (action: ActionsType) => void) => {
    setTeam(''); 
    dispatch({
      type: RESET_ANSWERS,
    });
  };


  export { answerReducer, updateAnswer, resetAnswers };
