import React from 'react'
import {Input} from './components/Input'
import {Total} from './components/Total'
import {Tasks} from './components/Tasks'
import {GlobalStyles, Page} from './components/theme'

const Home = () => {
    return (
        <Page>
            <Total />
            <Tasks />
            <Input />
        </Page>
    )
}

const App = () => {
    return (
        <>
            <GlobalStyles />
            <Home />
        </>
    )
}

export default App
