import {selector} from 'recoil'
import {taskAtomF, tasksAtom} from './atoms'

export const completedCountSelector = selector({
    key: 'completedTasks',
    get: ({get}) => {
        const tasks = get(tasksAtom)
        const taskIds = tasks.map(t => t.id)
        const completedTasks = taskIds.map((id) => {
            return get(taskAtomF(id))
        })
        return completedTasks.filter((task) => task.isComplete).length
    },
})
