import React from 'react'
import {Input} from './components/Input'
import {Total} from './components/Total'
import {Tasks} from './components/Tasks'
import {ThemeProvider, GlobalStyles, Page} from './components/theme'
import {Header, darkModeState} from './components/Header'
import {useRecoilValue} from 'recoil'

const Home = () => {
    return (
        <Page>
            <Header />
            <Total />
            <Tasks />
            <Input />
        </Page>
    )
}

const App = () => {
    const darkMode = useRecoilValue(darkModeState)

    return (
        <ThemeProvider darkMode={darkMode}>
            <GlobalStyles />
            <Home />
        </ThemeProvider>
    )
}

export default App
