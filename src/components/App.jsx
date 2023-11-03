import '../cssFiles/App.css'
import ExtraFeatures from './ExtraFeatures'
import { v4 as uuid } from 'uuid'
import darkTheme from "../assets/dark-theme.svg"
import trash from "../assets/trash.svg"
import file from "../assets/file.svg"
import download from "../assets/download.svg"
import React, { useState } from 'react'
import PersonalDetails from './PersonalDetails'
import Preview from './Preview'
import Skills from './Skills'
import Education from './Education'

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
        name :"Example",
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
    const [personalDetails, setPersonalDetails] = useState({
        fullName: "",
        phone: "",
        email: "",
        address : "",
        summary : ""
    });
    const [activeCode, setActiveCode] = useState(0);
    const [skills, setSkills] = useState([]);
    const [education, setEducation] = useState([]);

    const handlePersonalDetailsChange = (newDetails)=>{
        setPersonalDetails(newDetails);
    }

    const handleSkillsChange = (newSkill)=>{
        setSkills(newSkill);
    }

    const handleEducationChange = (newEducation)=>{
        setEducation(newEducation);
    }

    const handleActiveCode = (newActiveCode)=>{
        setActiveCode(newActiveCode)
    }

    return(
        <React.Fragment>
            <header className='header'>
                <p className='title'>CV Builder</p>
            </header>
            <main className='main-container'>
                <div className='container'>
                    <ExtraFeatures features = {extraFeatures}/>
                    <PersonalDetails details={personalDetails} onUpdate={handlePersonalDetailsChange}/>
                    <div className='extra-details'>
                        <Skills details={skills} onUpdate={handleSkillsChange}
                                activeCode ={activeCode} handleActiveCode={handleActiveCode}/>
                        <Education details={education} onUpdate={handleEducationChange}
                                    activeCode ={activeCode} handleActiveCode={handleActiveCode}/>
                    </div>
                </div>
                <Preview details={personalDetails}
                        skillsList={skills}
                        educationList = {education}/>
            </main>
        </React.Fragment>
    )

}

export default App
