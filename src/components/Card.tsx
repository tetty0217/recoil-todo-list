import styled from 'styled-components'

export const Card = styled.li`
    border-radius: 8px;
    background-color: ${(props) => props.theme.card};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 15px;
`
