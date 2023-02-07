import { FC, useState, ChangeEvent } from "react";
import ITask from "./Interface";
import TodoTask from "./Components/TodoTask";
import Theme from "./Components/Theme";
import { Button } from "./Components/Button.style";
import {
  MainContainer,
  TodoContainer,
  InputContainer,
  BlackContainer,
} from "./Components/Container.style";
import { GlobalStyle } from "./Components/Global.style";
import { NewVoiceIcon } from "./Components/Icon.style";
import { LabelMedium } from "./Components/Label.style";
import { InputVoice } from "./Components/Input.style";

const App: FC = () => {
  const [openInput, setOpenInput] = useState<boolean>(false);
  const [task, setTask] = useState<string>("");
  const [countTask, setCountTask] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);
  //const [checkList, setCheckList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    //Se vi è un cambiamento chiamo la funzione setTask per cambiare lo stato del Task con la nuova stringa
    setTask(event.target.value);
  };
  const addVoice = (): void => {
    const newTask = {
      id: countTask,
      text: task,
      done: false,
    };
    setTodoList([...todoList, newTask]);
    //Riazzero il valore di input
    setTask("");
    setCountTask(countTask + 1);
    //Chiudo la schermata di Input
    setOpenInput(false);
  };
  const openInputScreen = (): void => {
    setOpenInput(true);
  };
  const deleteVoice = (taskIdtodelete: number): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.id !== taskIdtodelete;
      })
    );
  };

  const checkVoice = (task: ITask): void => {
    //sposto un task da una lista e un'altra o modifico l'ordine della lista
    const newTaskID = todoList.findIndex((t) => t.id === task.id);
    console.log("ID", newTaskID);
    todoList[newTaskID].done = !todoList[newTaskID].done;
    setTodoList([...todoList]);
  };

  return (
    <Theme>
      <GlobalStyle />
      <div className="App">
        <MainContainer>
          <BlackContainer openInput={openInput}>
            <InputContainer>
              <InputVoice
                name="task"
                value={task}
                placeholder="Inserisci il nome del task.."
                onChange={handleChange}
              ></InputVoice>
              <Button onClick={addVoice}>
                <LabelMedium>Salva</LabelMedium>
              </Button>
            </InputContainer>
          </BlackContainer>

          <TodoContainer>
            <h1>ToDo List</h1>

            {todoList
              .sort((p1, p2) =>
                p1.done < p2.done ? -1 : p1.done > p2.done ? 1 : 0
              )
              .map((task: ITask, key: number) => {
                return (
                  <TodoTask
                    key={key}
                    task={task}
                    deleteFunction={deleteVoice}
                    checkFunction={checkVoice}
                  />
                );
              })}
          </TodoContainer>
          <Button onClick={openInputScreen}>
            <NewVoiceIcon src="/images/Adds.svg" />
            <LabelMedium>Nuova voce</LabelMedium>
          </Button>
        </MainContainer>
      </div>
    </Theme>
  );
};

export default App;
