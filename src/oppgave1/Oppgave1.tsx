import { useState } from "react"

// TODO: lag et atom her som hodler en tekstverdi

export function Oppgave1() {
  return (
    <div className="box">
      <h2>Delt med recoil</h2>
      <Komponent1 />
      <Komponent2 />
    </div>
  )
}

function Komponent1() {
  // TODO: Bytt ut useState med useRecoilState
  const [text, setText] = useState("")

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
      />
    </div>
  )
}

function Komponent2() {
  // TODO: bytt ut teksten under med useRecoilValue
  const text = "Denne skal byttes ut med recoil"

  return (
    <div>
      <p>Inputfeltet har nå verdien: {text}</p>
    </div>
  )
}
