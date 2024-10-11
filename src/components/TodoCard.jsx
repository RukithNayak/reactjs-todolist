import React from 'react'

export default function TodoCard(props) {
  const {children, handleDeleteTodos, index, handleEditTodos} = props  
  return (
    <li className = "todoItem">
        {children}
                        <div className = "actionsContainer">
                            <button onClick = {() => {
                                handleDeleteTodos(index);
                            }}>
                                <i className ="fa-regular fa-pen-to-square"></i>
                            </button>
                            <button onClick = {() => {
                                handleDeleteTodos(index);
                            }}>
                                <i className ="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </li>
  )
}
