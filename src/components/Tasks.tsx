import React, {useEffect} from 'react'

// Components
import {Task} from './Task'

// Stores
import {useRecoilCallback, useRecoilState} from 'recoil'
import {getTasks, taskAtomF, tasksAtom, TasksType} from '../store/task'

export const Tasks: React.FC = () => {
    const [tasks, setTasks] = useRecoilState<TasksType>(tasksAtom)

    const addTasksFamily = useRecoilCallback(({set}) => {
        return (dataList: TasksType) => {
            dataList.forEach((t) => {
                set(taskAtomF(t.id), t)
            })
        }
    })

    // タスク取得（動作用の擬似API）
    // atomFamilyへの登録
    useEffect(() => {
        getTasks().then((data) => {
            setTasks(data)
            addTasksFamily(data)
        })
    }, [])

    if (!tasks || tasks.length <= 0) {
        return <p>読み込み中</p>
    }

    return (
        <ul>
            {tasks.map((t, i) => (
                <Task key={i} id={t.id} />
            ))}
        </ul>
    )
}
