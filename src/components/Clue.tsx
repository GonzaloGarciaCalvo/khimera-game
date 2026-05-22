import PistaBlue from '../assets/pistaBlue.webp'
import PistaYellow from '../assets/pistaYellow.webp'
import PistaRed from '../assets/pistaRed.webp' 
import type { TypeTeam } from "../types";

export const Clue = ({team}: {team: TypeTeam}) => {
    if (team === 'blue') return <img src={PistaBlue} className="clueImg" alt="pista azul" />;
    if (team === 'red') return <img src={PistaRed} className="clueImg" alt="pista red" />;
    if (team === 'yellow') return <img src={PistaYellow} className="clueImg" alt="pista yellow" />;
  }