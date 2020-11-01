import React from 'react';
import Link from 'next/link';

export default () => {
  return (
    <div>
      <h2> About us</h2>
      <Link href="/notes">
        <a>Go to notes</a>
      </Link>
    </div>
  );
};
