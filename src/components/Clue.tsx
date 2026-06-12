import PistaBlue from '../assets/pistaBlue.webp'
import PistaYellow from '../assets/pistaYellow.webp'
import PistaRed from '../assets/pistaRed.webp' 
import type { TypeTeam } from "../types";

export const Clue = ({team}: {team: TypeTeam}) => {

  const clueImgs: Record<TypeTeam, string> = {
  blue: PistaBlue,
  red: PistaRed,
  yellow: PistaYellow,
  }

  return <img src={clueImgs[team]}  className="clueImg" alt={`pista ${team}`} />;
}