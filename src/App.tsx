import { Header } from "./components/Header";
import { PlusCircle } from "@phosphor-icons/react";


import styles from './App.module.css';
import './global.css';


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <main>
          <div className={styles.newTask}>
            <textarea
              placeholder="Adicione uma nova tarefa"
            />
            <button type="submit">
              Criar
              <PlusCircle />
            </button>
          </div>


        </main>

      </div>
    </div>

  )

};