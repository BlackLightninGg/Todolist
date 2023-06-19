import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {Task, TaskPropsType} from "../Task";
import {FC, useState} from "react";

const meta: Meta<typeof Task> = {
    title: 'Todolist/Task',
    component: Task,

    tags: ['autodocs'],

    args: {
        changeTaskStatus: action("changeTaskStatus"),
        changeTaskTitle: action("changeTaskTitle"),
        removeTask: action("removeTask"),
        task: {
            id: "taskId1", title: "JS", isDone: true
        },
        todolistId: "todolistId1"
    }
};

export default meta;
type Story = StoryObj<typeof Task>;

export const TaskIsDoneStory: Story = {};

export const TaskIsNotDoneStory: Story = {
    args: {
        task: {
            id: "taskId2", title: "MongoDB", isDone: false
        },
    }
};

const TasksWithHook: FC<TaskPropsType> = (args) => {
    const [task, setTask] = useState(args.task)
    const changeTaskStatus = () => {
        setTask({...task, isDone: !task.isDone})
    }

    const changeTaskTitle = (taskId:string, title: string) => {
        setTask({...task, title: title})
    }
    return <Task changeTaskStatus={changeTaskStatus} changeTaskTitle={changeTaskTitle} removeTask={args.removeTask}
                 task={task} todolistId={args.todolistId}/>
}

export const TasksWithHookStory: Story = {
    render: (args) => <TasksWithHook changeTaskStatus={args.changeTaskStatus} changeTaskTitle={args.changeTaskTitle}
                                     removeTask={args.removeTask} task={args.task} todolistId={args.todolistId}/>
}