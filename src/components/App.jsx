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
import WorkExperience from './WorkExperience'
import { experienceData, personalDetail, educationData, skillData } from './Data'

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
    const [workExperience, setWorkExperience] = useState([]);

    const sampleData = ()=>{
        setActiveCode(0);
        setPersonalDetails(personalDetail);
        setSkills([...skillData]);
        setEducation([...educationData]);
        setWorkExperience([...experienceData])
    }

    const clearData = ()=>{
        setActiveCode(0);
        setPersonalDetails({fullName:"",phone:"",email:"",address:"",summary:""});
        setSkills([]);
        setEducation([]);
        setWorkExperience([]);
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

    const handleWorkExperienceChange = (newWork)=>{
        setWorkExperience(newWork)
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
                        <ExtraFeatures name="Sample" icon = {file} handleClick={sampleData} />
                        <ExtraFeatures name="Clear Resume" icon = {trash} handleClick={clearData} />
                        <ExtraFeatures name="Download" icon = {download} handleClick={downloadData} />
                    </div>

                    <PersonalDetails details={personalDetails} onUpdate={handlePersonalDetailsChange}/>
                    <div className='extra-details'>
                        <WorkExperience details={workExperience} onUpdate={handleWorkExperienceChange}
                            activeCode={activeCode} handleActiveCode={handleActiveCode}/>
                        <Education details={education} onUpdate={handleEducationChange}
                        activeCode ={activeCode} handleActiveCode={handleActiveCode}/>
                        <Skills details={skills} onUpdate={handleSkillsChange}
                                activeCode ={activeCode} handleActiveCode={handleActiveCode}/>
                    </div>
                </div>
                <Preview details={personalDetails}
                        skillsList={skills}
                        educationList = {education}
                        workList = {workExperience}/>
            </main>
        </React.Fragment>
    )

}

export default App
