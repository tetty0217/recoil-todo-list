import React from 'react'
import {Card} from './Card'
import styled from 'styled-components'
import {useRecoilValue} from 'recoil'
import {completedCountSelector} from '../store/task'

export const Total: React.FC = () => {
    const completedCount = useRecoilValue(completedCountSelector)

    return (
        <Container>
            <StatContainer>
                <Label>終わったタスク：</Label>
                <Count>{completedCount}</Count>
            </StatContainer>
        </Container>
    )
}

const StatContainer = styled.div`
    display: flex;
    align-items: center;
`

const Count = styled.div`
    font-size: 20px;
    margin-bottom: 4px;
    color: #3F51B5;
`

const Label = styled.div`
    margin: 0 6px 0 0;
    text-transform: uppercase;
`

const Container = styled(Card)`
    padding: 0;
    margin-bottom: 20px;
    border-radius: 0;
    border-bottom: 1px solid #607D8B;
`
