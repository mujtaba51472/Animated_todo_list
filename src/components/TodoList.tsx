import React from "react";
import { Todo } from "./Model";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

type TodoListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoList = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}: TodoListProps) => {
  return (
    <div className="container">
      <Droppable droppableId="todos">
        {(provided , snapshot) => (
          <div
          className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
          ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Active Tasks</span>
            {todos.map((todo, index) => (
              <SingleTodo
                key={todo.id}
                index={index}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="completedTodos">
        {(provided ,snapshot ) => (
          <div
          className={`todos  ${
            snapshot.isDraggingOver ? "dragcomplete" : "remove"
          }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Completed Tasks</span>
            {completedTodos.map((todo, index) => (
              <SingleTodo
                key={todo.id}
                index={index}
                todo={todo}
                todos={completedTodos}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
