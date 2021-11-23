import "./App.css"
import { RecoilRoot } from "recoil"
import { TodoList } from "./todo/TodoList"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import { Visning } from "./oppgave1/Visning"
import { Oppgave2 } from "./oppgave2/Oppgave2"

function App() {
  return (
    <RecoilRoot>
      <Router>
        <header>
          <Link to="/oppgave1">Oppgave 1</Link>
          <Link to="/oppgave2">Oppgave 2</Link>
          <Link to="/">Todo list</Link>
        </header>
        <div>
          <Routes>
            <Route path="/oppgave1" element={<Visning />}></Route>
            <Route path="/oppgave2" element={<Oppgave2 />}></Route>
            <Route path="/" element={<TodoList />}></Route>
          </Routes>
        </div>
      </Router>
    </RecoilRoot>
  )
}

export default App
