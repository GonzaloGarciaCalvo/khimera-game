import { useReducer, useState } from 'react'
import './App.css'

type AnswerState = {
  currentQuestionId: number;
  [key: number]: {
    correctAnswer: string;
    status: 'undone' | 'correct' | 'incorrect';
  };
};

type UpdateAnswerAction = {
  type: typeof UPDATE_ANSWER;
  payload: {
    questionId: number;
    correctAnswer: string;
    status: 'undone' | 'correct' | 'incorrect';
  };
};
type ResetAnswersAction = {
  type: typeof RESET_ANSWERS;
};

const UPDATE_ANSWER = 'UPDATE_ANSWER';
// Definir el tipo de acción para restablecer el estado de las respuestas
const RESET_ANSWERS = 'RESET_ANSWERS';

const answerReducer = (state: AnswerState, action: UpdateAnswerAction | ResetAnswersAction): AnswerState => {
  switch (action.type) {
    case UPDATE_ANSWER:
      return {
        ...state,
        [action.payload.questionId]: {
          correctAnswer: action.payload.correctAnswer,
          status: action.payload.status,
        },
      };
    case RESET_ANSWERS:
      return {};
    default:
      return state;
  }
};

function App() {

  const initialAnswers: AnswerState = {
    1: { correctAnswer: 'a', status: 'undone' },
    2: { correctAnswer: 'b', status: 'undone' },
    // Agrega más preguntas según sea necesario
  }

  const [answers, dispatch] = useReducer(answerReducer, initialAnswers);

  const updateAnswer = (questionId: number, correctAnswer: string, status: 'undone' | 'correct' | 'incorrect') => {
    dispatch({
      type: UPDATE_ANSWER,
      payload: {
        questionId,
        correctAnswer,
        status,
      },
    });
  };

  const resetAnswers = () => {
    dispatch({
      type: RESET_ANSWERS,
    });
  };

  const handleAnswerChange = (questionId: string, selectedAnswer: string) => {
    updateAnswer(questionId, selectedAnswer);
  };

  /* console.log(Object.keys(answers).map((questionId) => answers[questionId].correctAnswer)); */
  console.log("answers array: ", Object.values(answers));

  console.log("initialAnswers: ", initialAnswers);

  return (
    <>
    <section>
      <h1>Welcome to Barzuna Game</h1>
      <p>Get ready for an adventure!</p>
    </section>
    <section>
        <h2>About the Game</h2>
        <p>Barzuna Game is an exciting new game that takes you on a thrilling journey through a fantastical world. Explore, battle, and conquer as you embark on your quest to become the ultimate champion.</p>
    </section>
    <section>
      <article>
        {/* <h1>Pregunta 1</h1> */}
        {Object.keys(answers).map((questionId) => (
          <select 
            defaultValue=""
            key={questionId} 
            name={`pregunta${questionId}`} 
            //id={`pregunta${questionId}`} 
            //value={answers[questionId]?.correctAnswer || ''} 
            onChange={(e) => handleAnswerChange(questionId, e.target.value)}>
            <option value="" disabled>Selecciona una respuesta</option>
            <option value="a">Opción {questionId} 'a'</option>
            <option value="b">Opción {questionId} 'b'</option>
            <option value="c">Opción {questionId} 'c'</option>
          </select>
        ))}
      </article>
      {/* <article>
        <h1>Pregunta 2</h1>
        <select name="pregunta2" id="pregunta2">
          <option value="a">Opción 1</option>
          <option value="b">Opción 2</option>
          <option value="c">Opción 3</option>
        </select>
      </article> */}
      <button onClick={resetAnswers}>Restablecer respuestas</button>
    </section>
    </>
  )
}

export default App
