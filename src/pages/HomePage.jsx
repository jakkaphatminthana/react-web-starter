import React, { useState } from "react";
import NewTask from "../components/NewTask";
import TodoItem from "../components/TodoItem";
import Spinner from "../components/Spinner";

function HomePage() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function delay() {
    return new Promise((resolve) => setTimeout(resolve, 300));
  }

  const addTask = async (task) => {
    setIsLoading(true);
    setTodos((prevTodos) => [...prevTodos, task]);
    await delay();
    setIsLoading(false);
  };

  const deleteTask = (id) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== id));
  };

  const updateTask = (updated, id) => {
    setTodos((prevTodos) => prevTodos.map((t, i) => (i === id ? updated : t)));
  };

  return (
    <>
      <NewTask addTask={addTask} />
      {isLoading ? (
        <Spinner />
      ) : (
        todos.length > 0 && (
          <ul className="bg-gray-200 rounded-md shadow-sm p-4">
            {todos.map((todo, i) => (
              <TodoItem
                key={i}
                id={i}
                todo={todo}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            ))}
          </ul>
        )
      )}
    </>
  );
}

export default HomePage;
