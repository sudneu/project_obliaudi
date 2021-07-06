import React from 'react';

import Card from '../../UIComponents/Card/Card';
import Button from '../../UIComponents/Buttons/Button';

import './Book.css';

const Book = props => {
  return (
    <Card enterClass="book">
      <div className="book-cover">
        <img src={props.source} alt={props.name+" book cover"}/>
      </div>
      <div>
        <h1>{props.name}</h1>
        <h4>{props.released}</h4>
        <p>{props.description}</p>
      </div>
      <div className="button">
        <Button name="details" type="card" />
        <Button name="Read reviews" type="card" />
      </div>
    </Card>
  );
}

export default Book;
