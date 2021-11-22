import { ChangeEventHandler, FormEventHandler, useState } from "react"
import { useSetRecoilState } from "recoil"
import { todoListState } from "./TodoList"

export function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("")
  const setTodoList = useSetRecoilState(todoListState)

  const addItem: FormEventHandler<HTMLFormElement> = (e) => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ])
    setInputValue("")
    e.preventDefault()
  }

  const onChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setInputValue(value)
  }

  return (
    <div>
      <form onSubmit={addItem}>
        <input type="text" value={inputValue} onChange={onChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

// utility for creating unique Id
let id = 0
function getId() {
  return id++
}
