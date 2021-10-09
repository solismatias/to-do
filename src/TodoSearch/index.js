import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext)
  function onSearchValueChange(e) {
    setSearchValue(e.target.value)
    console.log(e.target.value);
  }

  return (
    <input
      className="TodoSearch"
      placeholder="Buscar Tarea"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
