import React, { useState } from "react";

import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./components/Model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent): void => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
    }
    setTodo("");
  };

  return (
    <div className="App">
      <span className="heading">Task</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {/* TodoList  */}

      <TodoList todos={todos} setTodos={setTodos}/>


    </div>
  );
};

export default App;
