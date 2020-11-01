import Link from 'next/link';
import React from 'react';

export default () => {
  const notes = new Array(15)
    .fill(1)
    .map((e, i) => ({ id: i, title: `Note: ${i}` }));

  return (
    <div>
      <h1>Notes</h1>
      {notes.map((note) => (
        <Link href="/notes/[id]" key={note.id} as={`notes/${note.id}`}>
          <a>
            <h2>{note.title}</h2>
          </a>
        </Link>
      ))}
    </div>
  );
};
