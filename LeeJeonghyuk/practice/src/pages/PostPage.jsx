import axios from "axios";
import { useEffect, useState } from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";

export default function PostPage() {
  const [posts, setPosts] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${API_URL}/posts?_limit=5`)
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, [API_URL]);

  const addPost = (newPost) => {
    axios
      .post(`${API_URL}/posts`, newPost)
      .then((res) => setPosts((prev) => [res.data, ...prev]));
  };

  const updatePost = (updatedPost) => {
    axios
      .patch(`${API_URL}/posts/${updatedPost.id}`, updatedPost)
      .then((res) =>
        setPosts((prev) =>
          prev.map((p) => (p.id === updatedPost.id ? res.data : p))
        )
      );
  };

  const deletePost = (id) => {
    axios
      .delete(`${API_URL}/posts/${id}`)
      .then(() => setPosts((prev) => prev.filter((p) => p.id !== id)));
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>게시글 관리 페이지</h1>
      <PostForm onAdd={addPost} />
      <PostList posts={posts} onUpdate={updatePost} onDelete={deletePost} />
    </div>
  );
}
