import React, {useState} from 'react'
import styled from 'styled-components'
import {TextStyle as TaskTextStyle} from './Task'
import {useRecoilCallback, useRecoilValue} from 'recoil'
import {newTaskId, taskAtomF, tasksAtom} from '../store/task'

export const Input: React.FC = () => {
    const [label, setLabel] = useState('')
    const tasks = useRecoilValue(tasksAtom)

    const addTask = useRecoilCallback(({set}) => {
        return (label: string) => {
            const newId = newTaskId(tasks)
            const newTask = {id: newId, label: label, isComplete: false}
            set(tasksAtom, [...tasks, newTask])
            set(taskAtomF(newId), newTask)
        }
    })

    return (
        <Field
            placeholder="タスクを入力してね"
            value={label}
            onChange={({currentTarget}) => {
                setLabel(currentTarget.value)
            }}
            onKeyUp={({keyCode}) => {
                if (keyCode === 13) {
                    addTask(label)
                    setLabel('')
                }
            }}
        />
    )
}

const Field = styled.input`
    margin: 16px 0 0;
    padding: 16px;
    width: 100%;
    height: 100%;
    appearance: none;
    border: 1px solid #607d8b;
    background-color: transparent;
    outline: none;
    ${TaskTextStyle};
`
