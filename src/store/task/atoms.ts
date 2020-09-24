import {atom, atomFamily} from 'recoil'

export type TaskType = {
    id: number
    label: string
    isComplete: boolean
}

export type TasksType = Array<TaskType>

export const tasksAtom = atom({
    key: 'tasks',
    default: [] as TasksType,
})

export const taskAtomF = atomFamily({
    key: 'task',
    default: {
        id: 0,
        label: '',
        isComplete: false,
    },
})
