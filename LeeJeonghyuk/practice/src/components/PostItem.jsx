import React, { useState } from "react";

export default function PostItem({ post, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editUsername, setEditUsername] = useState(post.username);

  const handleSave = () => {
    onUpdate({ ...post, username: editUsername });
    setIsEditing(false);
  };

  return (
    <div className="post-item">
      {isEditing ? (
        <>
          <input
            value={editUsername}
            onChange={(e) => setEditUsername(e.target.value)}
          />
          <button onClick={handleSave}>저장</button>
          <button onClick={() => setIsEditing(false)}>취소</button>
        </>
      ) : (
        <>
          <h3>{post.username}</h3>
          <p>{post.email}</p>
          <button onClick={() => setIsEditing(true)}>수정</button>
          <button onClick={() => onDelete(post.id)}>삭제</button>
        </>
      )}
    </div>
  );
}
