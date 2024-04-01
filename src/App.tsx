import { PlusCircle } from "@phosphor-icons/react";
import { useState } from "react";

import styles from './App.module.css';
import './global.css';

import { HeaderList } from "./components/list/HeaderList";
import { EmptyTask } from "./components/list/EmptyTask";
import { Item } from "./components/list/Item";
import { Header } from "./components/Header";
import { Button } from "./components/Button";
import { Input } from "./components/Input";


export interface ITask {
  id: number
  text: string
  isChecked: boolean
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [inputValue, setInputValue] = useState('')

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  function handleAddTask() {
    if (!inputValue) {
      return
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask])
    setInputValue('')
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id)
    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return
    }
    setTasks(filteredTasks)
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }
      return { ...task }
    })

    setTasks(updatedTasks)
  }
  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input
            onChange={(event) => setInputValue(event.target.value)}
            value={inputValue}
          />

          <Button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>

        <div className={styles.taskList}>
          <HeaderList
            tasksCounter={tasks.length}
            checkedTasksCounter={checkedTasksCounter}
          />

          {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <Item
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleTask}
                />

              ))}
            </div>
          ) : (
            <EmptyTask />
          )}
        </div>
      </section>
    </main>
  )
};