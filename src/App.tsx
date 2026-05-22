import { useState } from 'react'
import './App.css'
import { TeamSelector } from './components/TeamSelector';
import {QuestionContainer} from './components/QuestionContainer';
import type { TypeTeam } from './types';
import { useQuestionStore } from './store';
import Logo from './assets/logo-Maldonado.png'
import { Clue } from './components/Clue';


function App() {

  const [team, setTeam] = useState<TypeTeam | ''>('');
  const resetQuestions = useQuestionStore((state) => state.resetQuestions);
  const isFinalized = useQuestionStore((state) => state.isFinalized);
  const handleTeam = (e) => {
    setTeam(e?.target?.value);
    if (e?.target?.value !== '') resetQuestions();
  }

  return (
		<><img src={Logo} width={140} height={140} className="logoMaldonado" alt="logo de Maldonado & Asociados" />
      <TeamSelector setTeam={handleTeam} team={team} />
      {team && (
        <QuestionContainer
          team={team}
          setTeam={handleTeam}
        />
      )}
      <section>
        {team && isFinalized && <Clue team={team as TypeTeam} />}
      </section>
		</>
	);
}

export default App
