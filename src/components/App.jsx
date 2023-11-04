import '../cssFiles/App.css'
import ExtraFeatures from './ExtraFeatures'
import React, { useEffect, useRef, useState } from 'react'
import PersonalDetails from './PersonalDetails'
import Preview from './Preview'
import Skills from './Skills'
import Education from './Education'
import WorkExperience from './WorkExperience'
import { experienceData, personalDetail, educationData, skillData, icons } from '../data/Data'
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
    const [darkMode, setDarkMode] = useState(false)

    useEffect(()=>{
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
           document.body.classList.add("dark-mode");
           setDarkMode(true)
          }
    },[])

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

    const changeTheme = ()=>{
        document.body.classList.toggle("dark-mode");
        setDarkMode(prevDarkMode => !prevDarkMode);
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
                <a className='github' href='https://github.com/Rohan-1-3' target='_blank' rel="noreferrer">
                <p>Rohan-1-3</p>
                {darkMode ? <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ffffff" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#000000]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#000000]"> </path> </g> </g> </g> </g></svg>
                :<svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#000000]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#000000]"> </path> </g> </g> </g> </g></svg>
            }
                </a>
            </header>
            <main className='main-container'>
                <div className='container'>
                    <div className='extra-features'>
                        <ExtraFeatures name="Theme"
                        icon = {darkMode ? icons.light.darkTheme : icons.dark.darkTheme}
                        handleClick={changeTheme} />
                        <ExtraFeatures name="Sample"
                        icon = {darkMode ? icons.light.file : icons.dark.file}
                        handleClick={sampleData} />
                        <ExtraFeatures name="Clear Resume"
                        icon = {darkMode ?  icons.light.trash : icons.dark.trash}
                        handleClick={clearData} />
                        <ExtraFeatures name="Download"
                        icon = {darkMode ?  icons.light.download : icons.dark.download}
                        handleClick={printData} />
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
