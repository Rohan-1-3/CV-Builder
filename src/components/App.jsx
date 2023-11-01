import '../cssFiles/App.css'
import ExtraFeatures from './ExtraFeatures'
import { v4 as uuid } from 'uuid'
import darkTheme from "../assets/dark-theme.svg"
import trash from "../assets/trash.svg"
import file from "../assets/file.svg"
import download from "../assets/download.svg"
import React from 'react'

const extraFeatures = [
    {
        name :"Theme",
        iconSrc: darkTheme,
        id: uuid()
    },
    {
        name :"Clear Resume",
        iconSrc: trash,
        id: uuid()
    },
    {
        name :"Example Resume",
        iconSrc: file,
        id: uuid()
    },
    {
        name :"Download CV",
        iconSrc: download,
        id: uuid()
    }
]

function App() {

    return(
        <React.Fragment>
            <header className='header'>
                <p className='title'>CV Builder</p>
            </header>
            <div className='main-container'>
                <ExtraFeatures features = {extraFeatures} />
            </div>
        </React.Fragment>
    )

}

export default App
