import type { TypeTeam } from "../types";

export function TeamSelector({setTeam, team}: {setTeam: (e: React.ChangeEvent<HTMLSelectElement>) => void, team: TypeTeam | ''}) {

  console.log("TEAM EN TEAMSELECTOR: ", team);
  return (
    <section>
        <select 
          name="team" 
          id=""
          onChange={setTeam}
          value={team}
        >
          <option value="">Select a team</option>
          <option value="blue">Team Blue: Alba - Gabriel - Meli </option>
          <option value="red">Team Red: Tuto - Tuti - Kari - Pri</option>
          <option value="yellow">Team Yellow: Gael - Aitana - Aimee - Ariel - Sophie - Kaia</option>
        </select>
      </section>
  )
}
