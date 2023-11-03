import '../cssFiles/App.css'
import ExtraFeatures from './ExtraFeatures'
import darkTheme from "../assets/dark-theme.svg"
import trash from "../assets/trash.svg"
import file from "../assets/file.svg"
import download from "../assets/download.svg"
import React, { useState } from 'react'
import PersonalDetails from './PersonalDetails'
import Preview from './Preview'
import Skills from './Skills'
import Education from './Education'

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

    const clearData = ()=>{
        setActiveCode(0);
        setPersonalDetails({fullName:"",phone:"",email:"",address:"",summary:""});
        setSkills([]);
        setEducation([]);
    }

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
                    <div className='extra-features'>
                        <ExtraFeatures name="Theme" icon = {darkTheme} handleClick={clearData} />
                        <ExtraFeatures name="Sample" icon = {file} handleClick={clearData} />
                        <ExtraFeatures name="Clear Resume" icon = {trash} handleClick={clearData} />
                        <ExtraFeatures name="Download" icon = {download} handleClick={clearData} />
                    </div>

                    <PersonalDetails details={personalDetails} onUpdate={handlePersonalDetailsChange}/>
                    <div className='extra-details'>
                        <Education details={education} onUpdate={handleEducationChange}
                        activeCode ={activeCode} handleActiveCode={handleActiveCode}/>
                        <Skills details={skills} onUpdate={handleSkillsChange}
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
