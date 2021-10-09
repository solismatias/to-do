import React from 'react'
import { TodoContext } from '../TodoContext'
import './TodoForm.css'

function TodoForm(props) {
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const onChange = (e) => {
        setNewTodoValue(e.target.value)
    }
    const onCancel = () => {
        setOpenModal(false)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Agregar nueva tarea</label>
            <textarea
                calue={newTodoValue}
                placeholder="Bañar a los perros y gatos"
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button-cancel"
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button-add"
                >
                    Agregar
                </button>
            </div>
        </form>
    )
}

export { TodoForm }
