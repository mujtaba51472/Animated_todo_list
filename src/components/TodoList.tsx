import React from "react";
import { Todo } from "./Model";
import SingleTodo from "./SingleTodo";

type TodoListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  console.log("todos", todos);
  return (
    <div className="container">
      <div className="todos">
        {!todos.length
          ? "No Todo"
          : todos?.map((todo, index) => (
              <SingleTodo
                index={index}
                todos={todos}
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
      </div>
    </div>
  );
};

export default TodoList;
