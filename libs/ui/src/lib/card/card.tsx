import React from 'react';

import { Route, Link } from 'react-router-dom';

import './card.module.scss';

/* eslint-disable-next-line */
export interface CardProps {}

export function Card(props: CardProps) {
  return (
    <div>
      <h1>Welcome to card!</h1>

      <ul>
        <li>
          <Link to="/">card root</Link>
        </li>
      </ul>
      <Route path="/" render={() => <div>This is the card root route.</div>} />
    </div>
  );
}

export default Card;
