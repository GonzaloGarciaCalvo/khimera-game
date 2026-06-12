import PistaBlue from '../assets/pistaBlue.webp'
import PistaYellow from '../assets/pistaYellow.webp'
import PistaRed from '../assets/pistaRed.webp' 
import type { TypeTeam } from "../types";

export const Clue = ({team}: {team: TypeTeam}) => {
  let clueImg: string;
  if (team === 'blue') clueImg = PistaBlue;
  if (team === 'red') clueImg = PistaRed;
  if (team === 'yellow') clueImg = PistaYellow;

  return <img src={clueImg} loading="lazy"  className="clueImg" alt={`pista ${team}`} />;
}