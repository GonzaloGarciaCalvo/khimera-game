import { blueQuestions, redQuestions, yellowQuestions } from "../data";
import type { AnswerType, TypeTeam } from "../types";

export const calculateInitialAnswers = (team: TypeTeam | '', initialState: AnswerType[]): AnswerType[] => {
  if(team === 'red') return redQuestions;
  if(team === 'blue') return blueQuestions;
  if(team === 'yellow') return yellowQuestions;
  return initialState;
  };