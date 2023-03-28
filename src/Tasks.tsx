

type PropsType = {
    data: {
        title: string
        tasks: Array<ArrayTasksType>
        students: Array<string>
    }
}


type ArrayTasksType = {
    taskId: number
    title: string
    isDone: boolean
}

export function Tasks(props: PropsType) {


    return (
        <div>
            <h3>{props.data.title}</h3>

            {props.data.tasks.map(el => {
                return (
                    <li><input key={el.taskId} type="checkbox" checked={el.isDone} />{el.title} </li>
                )
            })}

            <h4>Names:</h4>
            {props.data.students.map(el => {
                return (
                    <ul>
                        <li>{el}</li>
                    </ul>
                )
            })}







        </div>
    )
}