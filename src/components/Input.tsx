import React, {useState} from 'react'
import styled from 'styled-components'
import {
    Container as TaskContainer,
    TextStyle as TaskTextStyle,
} from './Task'
import {useRecoilCallback, useRecoilValue} from 'recoil'
import {tasksAtom} from '../store/task'

export const Input: React.FC = () => {
    const [label, setLabel] = useState('')
    const tasks = useRecoilValue(tasksAtom)

    const addTask = useRecoilCallback(({set}) => {
        return (label: string) => {
            set(tasksAtom, [...tasks, {id: null, isComplete: false, label: label}])
        }
    })

    return (
        <TaskContainer>
            <Field
                placeholder="Insert a new task..."
                type="search"
                autoComplete="off"
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
        </TaskContainer>
    )
}

const Field = styled.input`
    width: 100%;
    height: 100%;
    appearance: none;
    border: 0;
    background-color: transparent;
    outline: none;
    -webkit-appearance: textfield;
    ${TaskTextStyle};

    ::-webkit-search-decoration,
    ::-webkit-search-cancel-button {
        -webkit-appearance: none;
    }
`