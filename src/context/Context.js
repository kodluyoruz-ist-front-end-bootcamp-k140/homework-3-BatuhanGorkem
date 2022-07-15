import React from "react";
import { createContext, useState } from "react";
import axios from "axios";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  const [posts, setposts] = useState([]);

  const fetchTodos = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTodo(data));
  };

  const fetchPosts = (url) => {
    axios(url)
      .then((res) => setposts(res.data))
      .catch((err) => console.log("error:", err));
  };

  return (
    <Context.Provider value={{ fetchPosts, fetchTodos, todo, setTodo, posts }}>
      {children}
    </Context.Provider>
  );
};
