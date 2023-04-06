import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';

export type FilterStatusType = 'all' | 'active' | 'completed'

function App() {

    let [tasks, setTasks] = useState([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "Rest API", isDone: false },
        { id: 5, title: "GraphQL", isDone: false }
    ])

    function removeTask(id: number) {
        setTasks(tasks = tasks.filter(el => el.id !== id))
    }

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks} removeTask={removeTask}  />
        </div>
    );
}

export default App;
