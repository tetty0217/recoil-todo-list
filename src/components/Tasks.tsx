import React, {useEffect} from 'react'

// Components
import {Task} from './Task'

// Stores
import {useRecoilState} from 'recoil'
import {getTasks, tasksAtom, TasksType} from '../store/task'

export const Tasks: React.FC = () => {

    const [tasks, setTasks] = useRecoilState<TasksType>(tasksAtom)

    useEffect(() => {
        getTasks().then((data ) => setTasks(data))
    }, [])

    const handleClick = (id: number | null) => {
        // タスクの完了切り替え
    }

    if (!tasks || tasks.length <= 0) {
         return <p>読み込み中</p>
    }

    return (
        <ul>
            {tasks.map((t, i) => (
                <Task key={i}
                      id={t.id}
                      label={t.label}
                      isComplete={t.isComplete}
                      onClick={() => handleClick(t.id)}/>
            ))}
        </ul>
    )
}
