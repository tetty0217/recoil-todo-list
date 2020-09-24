import {selector} from 'recoil'
import {tasksAtom} from './atoms'

export const completedCountSelector = selector({
    key: 'completedTasks',
    get: ({get}) => {
        const tasks = get(tasksAtom)
        const completedTasks = tasks.filter(task => task.isComplete)
        return completedTasks.length
    },
})