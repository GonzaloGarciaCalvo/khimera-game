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
          <option value="red">Adultos consanguineos</option>
          <option value="blue">Adultos NO consanguineos</option>
          <option value="yellow">Menores de 18 años</option>
        </select>
      </section>
  )
}
