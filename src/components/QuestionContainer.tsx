import { useEffect, useReducer, useState } from "react";
import { QuestionDetail } from "./QuestionDetail"
import type {  AnswerType, TypeTeam} from "../types";
import { useQuestionStore } from '../store/index';
import { calculateInitialAnswers } from "../helpers/calculateInitialAnswers";
import mapa from '../assets/mapa-Libano.webp'
import { SET_INITIAL_ANSWERS} from "../helpers/actions";
import { answerReducer, resetAnswers, updateAnswer } from "../reducers";

export function QuestionContainer({ team, setTeam }: { team: TypeTeam | '', setTeam: (team: TypeTeam | '') => void }) {

  const initialState = (): AnswerType[] => {
    return calculateInitialAnswers(team, []);
  };

  const currentQuestion = useQuestionStore((state) => state.currentQuestion);
  const setAnswerQuantity = useQuestionStore((state) => state.setAnswersQuantity);
  const setIsFinalized = useQuestionStore((state) => state.setIsFinalized);
  const [isOpen, setIsOpen] = useState(false);
  const [answers, dispatch] = useReducer(
    answerReducer,
    [],
    initialState
  );

  const handleModalClose = () => {
    setIsOpen(false);   
  }

  const handleAnswerChange = (questionId: number, selectedAnswer: string) => {
    if (selectedAnswer === answers[currentQuestion].correctAnswer) {
      updateAnswer(questionId, selectedAnswer, 'correct', dispatch);
      if (currentQuestion < answers.length - 1) {
        setIsOpen(true);
      }
      if (currentQuestion >= answers.length - 1) {
        setIsFinalized(true);
      }
    } else {
      updateAnswer(questionId, selectedAnswer, 'incorrect', dispatch);
      setIsOpen(true);
    }
  };

  useEffect(() => {
    setAnswerQuantity(answers.length);
  }, []);

  useEffect(() => {
  dispatch({ type: SET_INITIAL_ANSWERS, payload: calculateInitialAnswers(team,[]) });
}, [team]);

  return (
    <section className="questionContainer">
      {team && (
        <QuestionDetail
          answer={answers?.[currentQuestion]}
          status={answers?.[currentQuestion]?.status}
          handleAnswerChange={handleAnswerChange}
          index={currentQuestion}
          isOpen={isOpen}
          setIsOpen={handleModalClose}
          image={team === 'red' && currentQuestion === 2 ? mapa : null}
        />
      )}
    <button 
      className="resetAnswersBtn" 
      onClick={() => resetAnswers( setIsFinalized, setTeam,dispatch)}>
      Cambiar equipo
    </button>
  </section>
  )
}