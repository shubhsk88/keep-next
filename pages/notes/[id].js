import React from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';

const Note = () => {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push('/')}>Go home</button>
      <h2> Note no. {router.query.id}</h2>;
      <Link href="/notes">
        <a>Back to notes</a>
      </Link>
    </div>
  );
};

export default Note;
