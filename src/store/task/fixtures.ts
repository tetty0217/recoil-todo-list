import {TasksType} from './atoms'

export const getTasks = async () => {
    const res: TasksType = [
        {id: 1, label: 'テスト1', isComplete: false},
        {id: 2, label: 'テスト2', isComplete: false},
        {id: 3, label: 'テスト3', isComplete: false},
    ]
    await new Promise((r) => setTimeout(r, 1000))
    return res
}