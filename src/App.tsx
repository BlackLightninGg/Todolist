import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import React, { useReducer } from 'react';
import { v1 } from 'uuid';
import { AddItemForm } from './AddItemForm';
import './App.css';
import { ButtonAppBar } from './ButtonAppBar';
import { TaskType, Todolist } from './Todolist';
import { addTasksAC, changeStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer } from './state/tasksReducer';
import { addTodolistAC, changeFilterAC, changeTodolistTitleAC, removeTodolistAC, todolistsReducer } from './state/todolistsReducer';

export type FilterValuesType = "all" | "active" | "completed";

export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}


function App() {

    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, dispatchTodolists] = useReducer(todolistsReducer, [
        { id: todolistId1, title: "What to learn", filter: "all" },
        { id: todolistId2, title: "What to buy", filter: "all" }
    ])

    let [tasks, dispatchTasks] = useReducer(tasksReducer, {
        [todolistId1]: [
            { id: v1(), title: "HTML&CSS", isDone: true },
            { id: v1(), title: "JS", isDone: true }
        ],
        [todolistId2]: [
            { id: v1(), title: "Milk", isDone: true },
            { id: v1(), title: "React Book", isDone: true }
        ]
    });

    function addTodolist(title: string) {
        let newTodolist = addTodolistAC(title);
        dispatchTasks(newTodolist);
        dispatchTodolists(newTodolist);

    }
    
    function changeTodolistTitle(id: string, title: string) {
        dispatchTodolists(changeTodolistTitleAC(id, title))
    }

    function changeTaskTitle(id: string, newTitle: string, todolistId: string) {
        dispatchTasks(changeTaskTitleAC(todolistId, id, newTitle))
    }

    function changeStatus(id: string, isDone: boolean, todolistId: string) {
        dispatchTasks(changeStatusAC(todolistId, id, isDone))
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        dispatchTodolists(changeFilterAC(todolistId, value))
    }

    function removeTodolist(id: string) {
        dispatchTodolists(removeTodolistAC(id));
    }

    function addTask(title: string, todolistId: string) {
        dispatchTasks(addTasksAC(todolistId, title))
    }
    
    function removeTask(id: string, todolistId: string) {
        dispatchTasks(removeTaskAC(id, todolistId))
    }

    return (
        <div className="App">
            <ButtonAppBar />
            <Container fixed>
                <Grid container style={{ padding: "20px" }}>
                    <AddItemForm addItem={addTodolist} />
                </Grid>
                <Grid container spacing={5}>
                    {
                        todolists.map(tl => {
                            let allTodolistTasks = tasks[tl.id];
                            let tasksForTodolist = allTodolistTasks;

                            if (tl.filter === "active") {
                                tasksForTodolist = allTodolistTasks.filter(t => !t.isDone);
                            }
                            if (tl.filter === "completed") {
                                tasksForTodolist = allTodolistTasks.filter(t => t.isDone);
                            }

                            return <Grid item key={tl.id}>
                                <Paper style={{ padding: "20px" }} elevation={10}>
                                    <Todolist
                                        id={tl.id}
                                        title={tl.title}
                                        tasks={tasksForTodolist}
                                        removeTask={removeTask}
                                        changeFilter={changeFilter}
                                        addTask={addTask}
                                        changeTaskStatus={changeStatus}
                                        filter={tl.filter}
                                        removeTodolist={removeTodolist}
                                        changeTaskTitle={changeTaskTitle}
                                        changeTodolistTitle={changeTodolistTitle}
                                    />
                                </Paper>

                            </Grid>
                        })
                    }
                </Grid>


            </Container>


        </div>
    );
}

export default App;
