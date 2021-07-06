import React from 'react';

import Book from './Book';

const Books= props => {
  return (
    <ul>
    {props.books.map((book,i) => {
    return <Book key={i} {...book} />;
    })
    }
    </ul>
  );
}

export default Books;
