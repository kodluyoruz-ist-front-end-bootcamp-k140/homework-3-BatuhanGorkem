import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../context/Context";
import { useState } from "react";
import fetchs from "../config/Fetchs";
import { ThemeContext } from "../context/ThemeContext";
const Todos = () => {
  const { fetchTodos, todo } = useContext(Context);
  const { theme } = useContext(ThemeContext);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetchTodos(fetchs.todos);
    setloading(false);
  }, []);

  console.log(todo);
  return loading ? (
    <h1>Loading</h1>
  ) : (
    <table class="table ml-3  table-sm">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
        </tr>
      </thead>
      <tbody>
        {todo.map((item) => (
          <tr>
            <th scope="row">{item.id}</th>
            <td>{item.title}</td>
            <td>{item.completed}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Todos;
