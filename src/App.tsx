import { useState } from 'react'
import './App.css'
import { TeamSelector } from './components/TeamSelector';
import {QuestionContainer} from './components/QuestionContainer';
import type { TypeTeam } from './types';
import { useQuestionStore } from './store';
import Logo from './assets/logo-Maldonado-2.png'
import { Clue } from './components/Clue';
import Aunts from './assets/aunts.webp'

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
        <img src={Logo} width={140} height={138} className="logoMaldonado" alt="logo de Maldonado & Asociados" />
      </header>
      <main>
        {!team && (
          <>
            <div className="instructionBox">
              <p>Para el siguiente interrogatorio, deben de haber leído primero las 2 cartas que le enviaron a Georgette, la carta que ella envió y la postal que le fue devuelta. Si no han llegado a estas pistas, volver luego a esta página para completar este paso importante de sucesión y dividirse en 3 grupos:</p>
              <ul>
                <li>1. Adultos consanguineos</li>
                <li>2. Adultos NO consanguineos</li>
                <li>3. Menores de 18 años</li>
              </ul>
            </div>
            <div className="titleContainer">
              <h1>Interrogatorio Caso No. 0719272026</h1>
              <h2>Proceso Sucesorio de la Sra. Georgette de Lucía Sauma Mereb</h2>
            </div>
            <TeamSelector setTeam={handleTeam} team={team} />
            <img src={Aunts} alt="Tías" className='auntsImg' />
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
