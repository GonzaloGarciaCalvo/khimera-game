import { type SubmitEventHandler } from "react";
import type { AnswerType, StatusType } from "../types";
import { Modal } from "./Modal";
import { useQuestionStore } from '../store/index';

export function QuestionDetail({
	answer,
	handleAnswerChange,
	index,
  isOpen,
  setIsOpen,
  image
}: {
	answer: AnswerType;
  status: StatusType;
	handleAnswerChange: (questionId: number, selectedAnswer: string) => void;
  index: number;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  image?: string | null;
}) {
  
  const setCurrentQuestion = useQuestionStore((state) => state.setCurrentQuestion);
  const currentQuestion = useQuestionStore((state) => state.currentQuestion)
  const answersLength = useQuestionStore((state) => state.answersQuantity);

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const value = formData.get('answer') as string;
    handleAnswerChange(answer?.id, value);
    
    const isCorrect = value.trim().toLowerCase() === answer?.correctAnswer.trim().toLowerCase()
    const status = isCorrect ? 'correct' : 'incorrect'

    if (status === 'correct' && currentQuestion < answersLength - 1) {
      setTimeout(() => {
        setIsOpen(false);  
        setCurrentQuestion();  
      }, 800);
    }
    if (status === 'correct' && currentQuestion >= answersLength - 1) {
      setTimeout(() => {
        setIsOpen(false);  
      }, 800);
    }
    if (status === 'incorrect') {
      setTimeout(() => {
        setIsOpen(false);
      }, 10000);
    }
  };

	return (
		<>
			<h1>Pregunta {index + 1}</h1>
			<p className="questionStatement">{answer?.statement}</p>
      {image && (
        <img 
          src={image} 
          alt="imagen de pregunta" 
          className="questionImg"
          width={600}
          height={498} 
        />
        )
      }
      <form 
        onSubmit={handleSubmit} 
        key={currentQuestion} 
        className="questionForm"
      >
        <fieldset className="optionsList" >
          {answer?.options.map((option, idx) => (
            <label key={idx}>
              <input 
                type="radio"
                name="answer"
                value={option}
                required
              /> 
                <span className="option">{option}</span>
            </label>
          ))}
        </fieldset>
        <button type="submit" className="submitAnswerBtn">Confirmar</button>
        {
          answer?.status !== 'undone' && (
            <Modal 
              type={answer?.status === 'correct' ? 'correct' : 'incorrect'} 
              isOpen={isOpen} 
              setIsOpen={setIsOpen} 
            />
          )
        }
      </form>
		</>
	);
}