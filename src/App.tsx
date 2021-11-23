import "./App.css"
import { RecoilRoot } from "recoil"
import { TodoList } from "./todo/TodoList"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import { Intro } from "./intro/Intro"

function App() {
  return (
    <RecoilRoot>
      <Router>
        <header>
          <Link to="/oppgave1">Oppgave 1</Link>
          <Link to="/">Todo list</Link>
        </header>
        <div>
          <Routes>
            <Route path="/oppgave1" element={<Intro />}></Route>
            <Route path="/" element={<TodoList />}></Route>
          </Routes>
        </div>
      </Router>
    </RecoilRoot>
  )
}

export default App
