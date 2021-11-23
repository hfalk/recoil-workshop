import { useState } from "react"
import { useRecoilValue } from "recoil"
import { fruits } from "./state"

// TODO: Lag et atom som holder en tekstverdi og bytt ut useState i Oppgave2

export function Oppgave2() {
  // TODO: Ta i bruk tekstverdiatomet her
  const [search, setSearch] = useState("")

  return (
    <div>
      <h2>Oppgave 2</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
      <h3>Resultater</h3>
      <Resultater />
    </div>
  )
}

// TODO: Lag en selector som tar inn teksten fra atomet og filtrerer fruits listen
const resultSelector = fruits
export function Resultater() {
  const resultater = useRecoilValue(resultSelector)

  return (
    <ul>
      {resultater.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  )
}
