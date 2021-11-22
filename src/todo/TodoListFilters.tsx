import { ChangeEventHandler } from "react"
import { atom, selector, useRecoilState } from "recoil"
import { todoListState } from "./TodoList"

const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "show-all",
})

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState)
    const list = get(todoListState)

    switch (filter) {
      case "show-completed":
        return list.filter((item) => item.isComplete)
      case "show-uncompleted":
        return list.filter((item) => !item.isComplete)
      default:
        return list
    }
  },
})

export function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState)

  const updateFilter: ChangeEventHandler<HTMLSelectElement> = ({
    target: { value },
  }) => {
    setFilter(value)
  }

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="show-all">All</option>
        <option value="show-completed">Completed</option>
        <option value="show-uncompleted">Uncompleted</option>
      </select>
    </>
  )
}
