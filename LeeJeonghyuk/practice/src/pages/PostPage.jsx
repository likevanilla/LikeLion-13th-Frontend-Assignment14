import axios from "axios";
import { useEffect, useState } from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";

export default function PostPage() {
  const [posts, setPosts] = useState([]);

  const API_URL = "https://jsonplaceholder.typicode.com";

  useEffect(() => {
    axios
      .get(`${API_URL}/users`)
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const addPost = (newPost) => {
    axios
      .post(`${API_URL}/users`, {
        username: newPost.username,
        email: newPost.email,
      })
      .then((res) => setPosts((prev) => [res.data, ...prev]))
      .catch((err) => console.error(err));
  };

  const updatePost = (updatedPost) => {
    axios
      .patch(`${API_URL}/users/${updatedPost.id}`, {
        username: updatedPost.username,
      })
      .then((res) =>
        setPosts((prev) =>
          prev.map((p) => (p.id === updatedPost.id ? { ...p, ...res.data } : p))
        )
      )
      .catch((err) => console.error(err));
  };

  const deletePost = (id) => {
    axios
      .delete(`${API_URL}/users/${id}`)
      .then(() => setPosts((prev) => prev.filter((p) => p.id !== id)))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>유저 프로필 관리</h1>
      <PostForm onAdd={addPost} />
      <PostList posts={posts} onUpdate={updatePost} onDelete={deletePost} />
    </div>
  );
}
