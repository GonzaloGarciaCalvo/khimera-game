import { useState } from 'react'
import './App.css'
import { TeamSelector } from './components/TeamSelector';
import {QuestionContainer} from './components/QuestionContainer';
import type { TypeTeam } from './types';
import { useQuestionStore } from './store';
import Logo from './assets/logo-Maldonado.png'
import { Clue } from './components/Clue';
//import { CountdownClock } from './components/CountDownClock';


function App() {

  const [team, setTeam] = useState<TypeTeam | ''>('');
  const resetQuestions = useQuestionStore((state) => state.resetQuestions);
  const isFinalized = useQuestionStore((state) => state.isFinalized);
  type SelectValue = TypeTeam | '';
  const handleTeam = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setTeam(e?.target?.value as SelectValue);
    if (e?.target?.value !== '') resetQuestions();
  }

  return (
		<>
      <header>
        <img src={Logo} width={140} height={140} className="logoMaldonado" alt="logo de Maldonado & Asociados" />
      </header>
      <main>
        {/* <section>
          <CountdownClock hours={1} minutes={0} />
        </section> */}
        {!team && (
          <>
            <div className="titleContainer">
              <h1>Interrogatorio Caso No. 0719272026</h1>
              <h2>Proceso Sucesorio de la Sra. Georgette de Lucía Sauma Mereb</h2>
            </div>
            <TeamSelector setTeam={handleTeam} team={team} />
          </>
        )}
        {team && !isFinalized && (
          <QuestionContainer
            team={team}
            setTeam={(team) => handleTeam({ target: { value: team } } as React.ChangeEvent<HTMLSelectElement>)}
          />
        )}
        <section>
          {team && isFinalized && <Clue team={team as TypeTeam} />}
        </section>
      </main>
      <footer>
        <p>Estudio jurídico Maldonado y Asociados. Copyright 2026.</p>
        <p>Powered by: Khimera Games</p>
      </footer>
		</>
	);
}

export default App
