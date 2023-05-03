import { useState } from "react"
import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks"

function App() {

  const [tasks, setTasks] = useState([]);

  function addTask(taskTitle) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }

  function deleteTaskById(taskId) {
    const newTasks = tasks.filter(task => task.id != taskId)
    setTasks(newTasks)
  }

  function toggleTaskComplete(taskId) {
    const tasksCompleted = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    });
    setTasks(tasksCompleted);
  }

  return (
    <>
      <Header
        onAddTask={addTask}
      />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onChecked={toggleTaskComplete}
      />
    </>
  )
}

export default App
