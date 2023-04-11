import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { FilterValuesType } from "./App";

type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: Array<TaskType>;
  removeTask: (taskId: string) => void;
  changeFilter: (value: FilterValuesType) => void;
  addTask: (t: string) => void;
};

export function Todolist(props: PropsType) {
  let [valueInput, setValueInput] = useState("");

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.currentTarget.value);
  };

  const onKeyDownInputHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    e.key === "Enter" && props.addTask(valueInput);
    e.key === "Enter" && setValueInput("");
  };

  const onClickButtonAddTasksHandler = () => {
    props.addTask(valueInput);
    setValueInput("");
  };

  const onClickButtonRemoveTasksHandler = (t: TaskType) => {
    console.log("asf");
    props.removeTask(t.id);
  };

  const onClickButtonChangeFilterHandler = (filterValue: FilterValuesType) => {
    props.changeFilter(filterValue);
  };

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input
          value={valueInput}
          onChange={onChangeInputHandler}
          onKeyDown={onKeyDownInputHandler}
        />
        <button onClick={onClickButtonAddTasksHandler}>+</button>
      </div>
      <ul>
        {props.tasks.map((t) => (
          <li key={t.id}>
            <button onClick={() => onClickButtonRemoveTasksHandler(t)}>
              ✖️
            </button>
            <input type="checkbox" checked={t.isDone} />
            <span>{t.title}</span>s
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => onClickButtonChangeFilterHandler("all")}>
          All
        </button>
        <button
          onClick={() => {
            onClickButtonChangeFilterHandler("active");
          }}
        >
          Active
        </button>
        <button
          onClick={() => {
            onClickButtonChangeFilterHandler("completed");
          }}
        >
          Completed
        </button>
      </div>
    </div>
  );
}
