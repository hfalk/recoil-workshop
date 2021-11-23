import { atom, useRecoilValue } from "recoil"
import { TodoItem, TodoItemType } from "./TodoItem"
import { TodoItemCreator } from "./TodoItemCreator"
import { filteredTodoListState, TodoListFilters } from "./TodoListFilters"
import { TodoListStats } from "./TodoListStats"

export const todoListState = atom<TodoItemType[]>({
  key: "todoListState",
  default: [],
})

export function TodoList() {
  //const todoList = useRecoilValue(todoListState)
  const todoList = useRecoilValue(filteredTodoListState)

  return (
    <>
      <h1>Todo list</h1>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  )
}
