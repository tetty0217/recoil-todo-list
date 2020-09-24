import {TasksType} from './atoms'

export const newTaskId = (tasks: TasksType) => {
    const taskIds = tasks.map((t) => t.id)
    const latestId = taskIds.reduce(_arrayMax)
    return latestId + 1
}

const _arrayMax = (arg1: number, arg2: number) => {
    return Math.max(arg1, arg2)
}
