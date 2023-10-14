import React, { useState } from 'react'

const Todo = () => {

    const [todo, setTodo] = useState({gettodo:''});

    const handleChange = (event) => {
        setTodo({...todo,[event.target.name]:event.target.value})
    }

    const dataBhejdo = (event) => {
        event.preventDefault()
        console.log()
    }

  return (
    <>
        <form onSubmit={dataBhejdo}>
            <input type="text" onChange={handleChange}  name='gettodo'/> <br />
            <button type="submit">Add to Todo</button>
            <h2>your list {todo?.length? <h2>{todo.map((item, index)=>( <span key={index}>{item}</span> ))}</h2> : <h2>none</h2> }</h2>
        </form>
    </>
  )
}

export default Todo;