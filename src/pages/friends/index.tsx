import React from 'react';

export default function Friends() {
  const friends = ['Alice', 'Bob', 'Charlie'];

  return (
    <div>
      <h1>My Friends:</h1>
      <ul>
        {friends.map((friend) => (
          <li key={friend}>{friend}</li>
        ))}
      </ul>
    </div>
  );
}