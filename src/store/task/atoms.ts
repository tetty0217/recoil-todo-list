import {atom} from 'recoil'

export type TaskType = {
    id:         number | null
    label:      string
    isComplete: boolean
}

export type TasksType = Array<TaskType>

export const taskAtom = atom({
    key: 'task',
    default: null,
})

export const tasksAtom = atom({
    key: 'tasks',
    default: [] as TasksType,
})