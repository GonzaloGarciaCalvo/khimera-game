export function QuestionDetail({ answer, handleAnswerChange, currentQuestion, index }: { answer: AnswerType, handleAnswerChange: (questionId: number, selectedAnswer: string) => void, currentQuestion: number }) {

  console.log("QuestionDetail answer: ", answer);
  console.log("QuestionDetail currentQuestion: ", currentQuestion);
  return (
    <>
      <h1>Pregunta {index+1}</h1>
      {/* <p>{answers[index]?.statement} ?</p> */}
      <p>{answer?.statement} ?</p>
      <select
        defaultValue=""
        key={answer.id}
        name={`pregunta${answer.id}`}
        //id={`pregunta${questionId}`} 
        //value={answers[questionId]?.correctAnswer || ''} 
        onChange={(e) => handleAnswerChange(answer.id, e.target.value)}>
        <option value="" disabled>Selecciona una respuesta</option>
        <option value="a">Opción {`${answer.id}`} 'a'</option>
        <option value="b">Opción {`${answer.id}`} 'b'</option>
        <option value="c">Opción {`${answer.id}`} 'c'</option>
      </select>
    </>
  )
}