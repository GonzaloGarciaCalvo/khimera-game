import { useReducer, useState } from 'react'
import './App.css'
import { QuestionDetail } from './components/QuestionDetail';
import { Accordion } from './components/Accordion';

type AnswerType = {
    id: number; 
    statement: string;
    correctAnswer: string;
    status: 'undone' | 'correct' | 'incorrect';
    options: string[]
};

type UpdateAnswerAction = {
  type: typeof UPDATE_ANSWER;
  payload: {
    questionId: number;
    status: 'undone' | 'correct' | 'incorrect';
  };
};
type ResetAnswersAction = {
  type: typeof RESET_ANSWERS;
};

type StatusType = 'undone' | 'correct' | 'incorrect';

const UPDATE_ANSWER = 'UPDATE_ANSWER';
// Definir el tipo de acción para restablecer el estado de las respuestas
const RESET_ANSWERS = 'RESET_ANSWERS';

const answerReducer = (state: AnswerType[], action: UpdateAnswerAction | ResetAnswersAction): AnswerType[] => {
  switch (action.type) {
    case UPDATE_ANSWER:
      return state.map(answer =>
        answer.id === action.payload.questionId
          ? { ...answer, status: action.payload.status }
          : answer
      );
    case RESET_ANSWERS:
      return [];
    default:
      return state;
  }
};

function App() {


  const [currentQuestion, setCurrentQuestion] = useState(0);

  const initialAnswers: AnswerType[] = [
    { id: 1, statement:'Cuál es la Lalalalalalalal' , correctAnswer: 'a', status: 'undone', options:[] },
    { id: 2, statement:'Dónde fue que LOlalaloo la', correctAnswer: 'b', status: 'undone', options:[] },
    // Agrega más preguntas según sea necesario
  ]

  const [answers, dispatch] = useReducer(answerReducer, initialAnswers);

  const updateAnswer = (questionId: number, response: string, status: StatusType) => {
    console.log(`Updating answer for question ${questionId} with answer ${response} and status ${status}`);
    
    dispatch({
      type: UPDATE_ANSWER,
      payload: {
        questionId,
        response ,
        status,
      },
    });
  };

  const resetAnswers = () => {
    dispatch({
      type: RESET_ANSWERS,
    });
  };

  const handleAnswerChange = (questionId: number, selectedAnswer: string) => {
    console.log(`Handling answer change for question ${questionId} with selected answer ${selectedAnswer}`);
    console.log("answers[currentQuestion].correctAnswer: ", answers[currentQuestion].correctAnswer);
    if (selectedAnswer === answers[currentQuestion].correctAnswer) {
      console.log("EN IF handleAnswerChange");
      updateAnswer(questionId, selectedAnswer, 'correct');
      setCurrentQuestion(prev => prev + 1);
    } else {
      updateAnswer(questionId, selectedAnswer, 'incorrect');
    }
    /* updateAnswer(questionId, selectedAnswer, 'undone'); */
  };

  /* console.log(Object.keys(answers).map((questionId) => answers[questionId].correctAnswer)); */

  //console.log("initialAnswers: ", initialAnswers);
  console.log("currentQuestion: ", currentQuestion);
  console.log("answers: ", answers);

  return (
		<>
			<section>
				<h1>Welcome to Barzuna Game</h1>
				<p>Get ready for an adventure!</p>
			</section>
			<section>
				<h2>About the Game</h2>
				<p>
					Barzuna Game is an exciting new game that takes you on a thrilling
					journey through a fantastical world. Explore, battle, and conquer as
					you embark on your quest to become the ultimate champion.
				</p>
			</section>
			<section>
				<article>

					{answers[currentQuestion] &&  answers.map((answer, index) => (
            <>
              
              <QuestionDetail
                answer={answer}
                handleAnswerChange={handleAnswerChange}
                currentQuestion={currentQuestion}
                index={index}
              />
            </>
					))}
				</article>
				<button onClick={resetAnswers}>Restablecer respuestas</button>
			</section>
      <section>
        <Accordion title="How to Play">
          <p>
            To play Barzuna Game, simply select your character and start your
            adventure. Use the controls to navigate through the world, battle
            enemies, and complete quests. The more you play, the stronger your
            character becomes!
          </p>
        </Accordion>  
      </section>
		</>
	);
}

export default App
