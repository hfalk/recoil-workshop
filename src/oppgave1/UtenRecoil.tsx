import { useState } from "react"

export function UtenRecoil() {
  const [text, setText] = useState("")

  return (
    <div className="box">
      <h2>Delt state uten recoil</h2>
      <Komponent1 text={text} setText={setText} />
      <Komponent2 text={text} />
    </div>
  )
}

function Komponent1({ text, setText }: any) {
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

function Komponent2({ text }: any) {
  return (
    <div>
      <p>Inputfeltet har nå verdien: {text}</p>
    </div>
  )
}
