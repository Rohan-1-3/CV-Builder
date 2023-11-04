import '../cssFiles/App.css'
import ExtraFeatures from './ExtraFeatures'
import darkTheme from "../assets/dark-theme.svg"
import trash from "../assets/trash.svg"
import file from "../assets/file.svg"
import download from "../assets/download.svg"
import React, { useRef, useState } from 'react'
import PersonalDetails from './PersonalDetails'
import Preview from './Preview'
import Skills from './Skills'
import Education from './Education'
import WorkExperience from './WorkExperience'
import { experienceData, personalDetail, educationData, skillData } from './Data'
import { useReactToPrint } from 'react-to-print'

function App() {
    const printRef = useRef();
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

    const printData = useReactToPrint({
        content: ()=>printRef.current,
        pageStyle: `
        @media print {
            .cv{
            transform: translate(0%,30%) scale(1.5);
            transform-origin: center;
            page-break-inside: avoid;
            page-break-before: always;
            page-break-after: always;
            }

            .professional-summary, .skills-list, .education-list, .work-list{
                transform: translateX(10%);
            }
        }

        `,
    })

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
                        <ExtraFeatures name="Download" icon = {download} handleClick={printData} />
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
                <div className='cv' ref={printRef}>
                    <Preview details={personalDetails}
                    skillsList={skills}
                    educationList = {education}
                    workList = {workExperience}/>
                </div>
            </main>
        </React.Fragment>
    )

}

export default App
