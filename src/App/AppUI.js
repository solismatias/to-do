import React from 'react'
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext'
import { Modal } from '../Modal'
import { TodoForm } from '../TodoForm';
import { MyLoader } from '../MyLoader'


function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        toggleCompleteTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext)

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {error && <p>Ocurrio un error, culpa de chimper </p>}
                {loading && <MyLoader />}
                {(!loading && !searchedTodos.length) && <p>Todo cargado GG 🅱️</p>}
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => toggleCompleteTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            {openModal && ( // esto pregunta si openModal existe y si es true 
                <Modal>
                    <TodoForm
                        setOpenModal={setOpenModal}
                        openModal={openModal}
                    />
                </Modal>
            )}

            <CreateTodoButton
                setOpenModal={setOpenModal}
                openModal={openModal}
            />
        </React.Fragment>
    )
}

export { AppUI }
