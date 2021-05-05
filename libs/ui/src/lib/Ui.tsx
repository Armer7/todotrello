import React from 'react';

import { Route, Link } from 'react-router-dom';

import './Ui.module.scss';

/* eslint-disable-next-line */
export interface UiProps {}

export function Ui(props: UiProps) {
  return (
    <div>
      <h1>Welcome to ui!</h1>

      <ul>
        <li>
          <Link to="/">ui root</Link>
        </li>
      </ul>
      <Route path="/" render={() => <div>This is the ui root route.</div>} />
    </div>
  );
}

export default Ui;
