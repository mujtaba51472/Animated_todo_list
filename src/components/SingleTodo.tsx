import React from 'react'
import {MdOutlineDone} from 'react-icons/md'
import {AiFillDelete , AiFillEdit} from 'react-icons/ai'
import './style.css'


import { Todo } from './Model'
type SingleTodoProps ={
    index: number;
    todo: Todo ;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;

}

const SingleTodo = ({index , todos , todo , setTodos}: SingleTodoProps) => {
  return (
    <form className='todos__single '>
        <span className='todos__single--text'>{todo.todo}</span>
        <div>
            <span className='icon'> <AiFillEdit/> </span>
            <span className='icon'><AiFillDelete/></span>
            <span className='icon'><MdOutlineDone/></span>

        </div>

    </form>
  )
}

export default SingleTodo