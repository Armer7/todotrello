import styles from './app.module.scss';
import React, {useEffect, useState} from 'react';
import {CardDataConfig} from "@todotrello/data";
export function App() {
  const [todos, setTodos] = useState<CardDataConfig[]>([]);

  return (
        <p>Thank you for using and showing some ♥ for Nx.</p>
  );
}

export default App;
