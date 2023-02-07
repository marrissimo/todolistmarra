import React, { useState } from "react";
import ITask from "../Interface";
import { TodoTaskStyle } from "./TodoTask.style";
import { Label } from "./Label.style";
import { DeleteIcon, Checkbox } from "./Icon.style";

//sopra ogni componente in cui voglio  passare una props
// devo definire un'interfaccia per specificare che tipo di props mi aspetto
// il punto interrogativo dopo il nome di unattributo della props serve per specificare un parametro opzionale
// il key lo passiamo per evitare una warning quando si usa map

interface Props {
  task: ITask;
  key: number;
  deleteFunction(taskIdToDelete: number): void;
  checkFunction(task: ITask): void;
}

// come input specifico che avrò un oggetto di tipo Props
const TodoTask = ({ task, deleteFunction, checkFunction }: Props) => {
  return (
    <TodoTaskStyle>
      <DeleteIcon
        src="/images/Bin.svg"
        onClick={() => deleteFunction(task.id)}
      ></DeleteIcon>

      <Checkbox
        type="checkbox"
        checked={task.done}
        onChange={() => {
          checkFunction(task);
        }}
      ></Checkbox>
      <Label done={task.done}>{task.text}</Label>
    </TodoTaskStyle>
  );
};

export default TodoTask;
