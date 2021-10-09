import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {

  const onClickButton = () => {
    // props.setOpenModal(prevState => !prevState) // Una forma que acabo de aprender xd
    props.setOpenModal(!props.openModal) // cambia entre true y false
  }

  return (
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
