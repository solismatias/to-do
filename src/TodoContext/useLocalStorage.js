import React from 'react'

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [item, setItem] = React.useState(initialValue)

    React.useEffect(() => { // todo este bloque de codigo se va a caragr una sola vez al renderizar por primera vez la app
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName) // tratamos de obtener del localStorage lo que queremos
                let parsedItem

                if (!localStorageItem) { // verificamos si el localStorage no existe y lo creamos
                    localStorage.setItem(itemName, JSON.stringify(initialValue)) // el primer argumento es la key y en el segundo argumento convertimos a string el valor
                    parsedItem = initialValue
                } else {
                    parsedItem = JSON.parse(localStorageItem) // si ya existe lo parseamos para leerlo
                }
                setItem(parsedItem)
                setLoading(false)
            } catch (error) {
                setError(error)
            }
        }, 1000)
    })

    const saveItem = (newItem) => {
        try {
            localStorage.setItem(itemName, JSON.stringify(newItem))
            setItem(newItem)
        } catch {
            setError(error)
        }
    }

    return {// si retornamos 2 estados, lo retornamos como array, si hay mas, un objeto 
        item,
        saveItem,
        loading,
        error,
    }
}



export { useLocalStorage }
