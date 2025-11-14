import React from "react";
import PostItem from "./PostItem";

export default function PostList({ posts, onUpdate, onDelete }) {
  return (
    <div className="post-list">
      <h2>게시글 목록</h2>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
