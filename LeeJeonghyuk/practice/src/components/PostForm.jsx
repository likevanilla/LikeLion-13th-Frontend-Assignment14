import { useState } from "react";

export default function PostForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) return;
    onAdd({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <h2>새 게시글 작성</h2>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="내용"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">등록</button>
    </form>
  );
}
