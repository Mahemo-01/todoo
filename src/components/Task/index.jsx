// import styles from "./task.module.css"
import { FaTrash } from 'react-icons/fa'
import "./task.css"

export function Task({ task, onChecked, onDelete }) {
  return (
    <div className='task'>
      <button className={task.isCompleted ? 'checkContainer checked' : 'checkContainer'} onClick={() => onChecked(task.id)}></button>

      <p className={task.isCompleted ? 'textCompleted' : ''}>{task.title}</p>

      <button className='deleteButton' onClick={() => onDelete(task.id)}>
        <FaTrash size={20} />
      </button>
    </div >
  )
}