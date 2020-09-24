import React from 'react'
import {Card} from './Card'
import styled from 'styled-components'
import {useRecoilValue} from 'recoil'
import {completedCountSelector} from '../store/task'

export const Total: React.FC = () => {
    const completedCount = useRecoilValue(completedCountSelector)

    return (
        <Container>
            <Point title="終わったタスク" value={completedCount}/>
        </Container>
    )
}

const Point: React.FC<{title: string; value: string | number}> = ({
                                                                      title,
                                                                      value,
                                                                  }) => {
    return (
        <StatContainer>
            <StatValue>{value}</StatValue>
            <StatLabel>{title}</StatLabel>
        </StatContainer>
    )
}

const StatContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${(props) => props.theme.text};
`

const StatValue = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 5px;
`

const StatLabel = styled.div`
    font-size: 11px;
    text-transform: uppercase;
`


const Divider = styled.div`
    width: 1px;
    height: 42px;
    background-color: ${(props) => props.theme.text};
    opacity: 0.3;
`

const Container = styled(Card)`
    padding-top: 15px;
    padding-bottom: 15px;
    margin-bottom: 20px;
`
