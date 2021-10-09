import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext'

// const defaultTodos = [
//   { text: 'Pasear a Pinchito', completed: false },
//   { text: 'Bañar perro viejo', completed: false },
//   { text: 'Dar de comer a raul', completed: false },
//   { text: 'Retar al beibis', completed: false },
//   { text: 'Ignorar al negrito', completed: false },
// ];

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;

