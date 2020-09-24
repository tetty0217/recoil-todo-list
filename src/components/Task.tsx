import React from 'react'
import styled, {css} from 'styled-components'
import {Card} from './Card'
import {taskAtomF, TaskType} from '../store/task'
import {useRecoilState} from 'recoil'

type OuterProps = {
    id: number
}

type Props = OuterProps

export const Task: React.FC<Props> = (props) => {
    const {id} = props

    const [{isComplete, label}, setTask] = useRecoilState<TaskType>(
        taskAtomF(id),
    )

    const handleClick = () => {
        setTask({id, label, isComplete: !isComplete})
    }

    return (
        <Container onClick={handleClick}>
            <CheckBox checked={isComplete} />
            <Content>{label}</Content>
        </Container>
    )
}

export const TextStyle = css`
    font-size: 17px;
    color: ${(props) => props.theme.text};
    font-family: inherit;
`

export const Container = styled(Card)`
    height: 50px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #ffc107;
`

const CheckBox = styled.div<{checked: boolean}>`
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin-right: 15px;
    transition: 0.2s all ease-in-out;
    align-items: center;
    justify-content: center;
    display: flex;
    background-color: #fff;
    cursor: pointer;

    ${(props) =>
        props.checked &&
        css`
            background-color: #ff5722;
        `}
`

const Content = styled.div`
    position: relative;
    ${TextStyle}
`
