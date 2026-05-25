import type { TypeTeam } from "../types";

export function TeamSelector({setTeam, team}: {setTeam: (e: React.ChangeEvent<HTMLSelectElement>) => void, team: TypeTeam | ''}) {

  return (
    <section>
        <select 
          name="team" 
          id=""
          onChange={setTeam}
          value={team}
        >
          <option value="">Selecciona tu equipo</option>
          <option value="blue">Equipo Azul</option>
          <option value="red">Equipo Rojo</option>
          <option value="yellow">Equipo Amarillo</option>
        </select>
      </section>
  )
}
