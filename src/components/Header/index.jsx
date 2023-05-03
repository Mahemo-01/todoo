import styles from "./header.module.css"
import { AiOutlinePlusCircle } from "react-icons/ai"
import todooLogo from '../../assets/img/Logo.svg'
import { useState } from "react"

export function Header({ onAddTask }) {

  const [title, setTitle] = useState('');

  function handleSubmit(event) {
    event.preventDefault()

    if (title === '') {
    } else {
      onAddTask(title)
      setTitle('')
    }
  }

  function onChangeTitle(event) {
    setTitle(event.target.value)
  }

  return (
    <header className={styles.header}>
      <h1>To-Do</h1>

      <form onSubmit={handleSubmit} className={styles.taskForm}>
        <input type="text" placeholder="add new task" value={title} onChange={onChangeTitle} />
        <button>
          create
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header >
  )
}