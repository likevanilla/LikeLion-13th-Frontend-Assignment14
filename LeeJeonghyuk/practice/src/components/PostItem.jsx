import React, { useState } from "react";

export default function PostItem({ post, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(post.title);

  const handleSave = () => {
    onUpdate({ ...post, title: editTitle });
    setIsEditing(false);
  };

  return (
    <div className="post-item">
      {isEditing ? (
        <>
          <input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <button onClick={handleSave}>저장</button>
        </>
      ) : (
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => setIsEditing(true)}>수정</button>
          <button onClick={() => onDelete(post.id)}>삭제</button>
        </>
      )}
    </div>
  );
}
