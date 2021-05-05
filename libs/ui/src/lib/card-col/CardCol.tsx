import React from 'react';

import { Route, Link } from 'react-router-dom';

import './CardCol.module.scss';

/* eslint-disable-next-line */
export interface CardColProps {}

export function CardCol(props: CardColProps) {
  return (
    <div>
      <h1>Welcome to cardCol!</h1>

      <ul>
        <li>
          <Link to="/">cardCol root</Link>
        </li>
      </ul>
      <Route
        path="/"
        render={() => <div>This is the cardCol root route.</div>}
      />
    </div>
  );
}

export default CardCol;
