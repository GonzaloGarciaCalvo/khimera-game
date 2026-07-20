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
          <option value="red">1. Grupo Rojo: Adultos consanguineos</option>
          <option value="blue">2. Grupo Azul: Adultos NO consanguineos</option>
          <option value="yellow">3. Grupo Amarillo: Menores de 18 años</option>
        </select>
      </section>
  )
}
