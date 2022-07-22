import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../context/Context";
import { useState } from "react";
import fetchs from "../config/Fetchs";

const Posts = () => {
  const { fetchPosts, posts } = useContext(Context);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetchPosts(fetchs.posts);
    setloading(false);
  }, []);

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <table class="table ml-3  table-sm">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr>
            <th scope="row">{post.id}</th>
            <td>{post.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Posts;
