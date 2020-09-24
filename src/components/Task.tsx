import React from 'react'
import styled, {css} from 'styled-components'
import {Card} from './Card'
import {TaskType} from '../store/task'

type InnerProps = {
    onClick: () => void
}
type Props = TaskType & InnerProps

export const Task: React.FC<Props> = (props) => {
    const {label, isComplete, onClick} = props

    return (
        <Container
            onClick={onClick}
        >
            <CheckBox checked={isComplete} />
            <Label>
                {label}
            </Label>
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
    background-color: ${(props) => props.theme.background};
    cursor: pointer;

    ${(props) =>
    props.checked &&
    css`
            background-color: transparent;
        `}
`

const Label = styled.div`
    position: relative;
    ${TextStyle}
`
