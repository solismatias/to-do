import React from 'react'
import { useLocalStorage } from './useLocalStorage'

const TodoContext = React.createContext()

function TodoProvider(props) {

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', [])

    const [searchValue, setSearchValue] = React.useState('')
    const [openModal, setOpenModal] = React.useState(false)


    const completedTodos = todos.filter(todo => todo.completed).length // cuento los todos completados
    const totalTodos = todos.length // cuanto los todos totales

    let searchedTodos = []

    if (!searchValue.length >= 1) {
        searchedTodos = todos
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase()
            const searchText = searchValue.toLowerCase()
            return todoText.includes(searchText)
        })
    }

    const toggleCompleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text) // para encontrar el index de la tarea
        const newTodos = [...todos]
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed // de esta forma se comporta como un switch, que alterna entre completado y no completado
        saveTodos(newTodos)
    }


    // React.useEffect(() => {
    //     console.log('use effect prro');
    // }, [totalTodos])

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text) // para encontrar el index de la tarea
        const newTodos = [...todos]
        newTodos.splice(todoIndex, 1) // le indico desde que posicion quiero eliminar el elemento del array y cauntos elementos
        saveTodos(newTodos)
    }

    const addTodo = (text) => {
        const newTodos = [...todos]
        newTodos.push({
            completed: false,
            text
        })
        saveTodos(newTodos)
    }




    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            toggleCompleteTodo,
            deleteTodo,
            addTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}


export { TodoContext, TodoProvider }
