import { useState } from "react";

export default function PostForm({ onAdd }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email) return;
    onAdd({ username, email });
    setUsername("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <h2>새 유저 등록</h2>
      <input
        type="text"
        placeholder="닉네임"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">추가</button>
    </form>
  );
}
