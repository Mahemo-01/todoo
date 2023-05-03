import { Task } from '../Task'
import styles from "./tasks.module.css"

export function Tasks({ tasks, onChecked, onDelete }) {

  const tasksQuantity = tasks.length
  const completedTasks = tasks.filter(task => task.isCompleted).length

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tasks</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed tasks</p>
          <span>{completedTasks} of {tasksQuantity}</span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map(task => (
          <Task key={task.id} task={task} onChecked={onChecked} onDelete={onDelete}></Task>
        ))}
      </div>
    </section>
  )
}
