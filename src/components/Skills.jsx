/* eslint-disable react/prop-types */

import React, { useEffect, useState } from "react";
import "../cssFiles/ExtraDetail.css";
import { v4 as uuid } from 'uuid'
import InputField from "./InputField";

export function SkillContainer({handleChange ,skill, skills}){
    const [skillEditName, setSkillEditName] = useState(skill.skillName);
    const [updatedSkills, setUpdatedSkills] = useState(skills);

    useEffect(() => {
        if (updatedSkills !== null) {
          handleChange(updatedSkills);
        }
      }, [updatedSkills]);


    const handleDelete = ()=>{
        setUpdatedSkills(skills.filter(ski => ski.id !== skill.id))
    }

    const handleHide = ()=>{
        setUpdatedSkills(skills.map(ski => {
            return (ski.id === skill.id) ? { ...ski, visibility: !ski.visibility } : { ...ski };
        }))
    }

    const handleEdit = ()=>{
        setUpdatedSkills(skills.map(ski => {
            return (ski.id === skill.id) ? { ...ski, active : !ski.active } : { ...ski };
        }))
    }

    const handleEditConfirm = ()=>{
        setUpdatedSkills(skills.map(ski => {
            return (ski.id === skill.id) ? { ...ski, skillName : skillEditName } : { ...ski }
          }))
    }

    return(
        <React.Fragment>
            {
                skill.active ?(
                    <div className="edit-form">
                        <InputField
                        id="skill-name"
                        label="Skill"
                        value={skillEditName}
                        onChange={e=>setSkillEditName(e.target.value)}
                        />
                        <div className="form-buttons">
                            <button className="confirm-button" onClick={handleEditConfirm}>Confirm</button>
                            <button className="cancel-button" onClick={()=>{
                                handleEdit()
                                setSkillEditName(skill.skillName)
                            }}>Back</button>
                        </div>
                    </div>
                )

                :(
                    <div className="skill">
                        <p onClick={handleEdit}>{skill.skillName}</p>
                        <div className="extra-detail-icons">
                            <svg onClick={handleDelete} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M14 10V17M10 10V17" stroke="#ff0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            <svg onClick={handleHide} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </div>
                    </div>
                )
            }
        </React.Fragment>
    )
}

function Skills({details, onUpdate, activeCode, handleActiveCode}) {
    const [skills, setSkills] = useState(details);
    const [formActive, setFormActive] = useState(false);
    const [skillName, setSkillName] = useState("");

    const skillActiveCode = 1;

    useEffect(()=>{
        onUpdate(skills);
    },[onUpdate, skills])

    const handleChange = (updatedSkills)=>{
        setSkills(updatedSkills);
    }

    const handleConfirm =()=>{
        const newSkill = {
            id: uuid(),
            skillName: skillName,
            active : false,
            visibility: true
        }

        setSkills(prevSkills => [...prevSkills, newSkill])
        setFormActive(false);
        setSkillName("");
    }

    return (
        <div className="skills-container extra-detail">
            <div className="title-detail" onClick={()=>{
                (activeCode === skillActiveCode) ? handleActiveCode(0) :handleActiveCode(skillActiveCode);
            }}>
                <h2>Skills</h2>
                <svg className={activeCode === skillActiveCode ? "rotate" : ""} viewBox="0 -4.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow_down [#338]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-220.000000, -6684.000000)" fill="#9e9e9e"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M164.292308,6524.36583 L164.292308,6524.36583 C163.902564,6524.77071 163.902564,6525.42619 164.292308,6525.83004 L172.555873,6534.39267 C173.33636,6535.20244 174.602528,6535.20244 175.383014,6534.39267 L183.70754,6525.76791 C184.093286,6525.36716 184.098283,6524.71997 183.717533,6524.31405 C183.328789,6523.89985 182.68821,6523.89467 182.29347,6524.30266 L174.676479,6532.19636 C174.285736,6532.60124 173.653152,6532.60124 173.262409,6532.19636 L165.705379,6524.36583 C165.315635,6523.96094 164.683051,6523.96094 164.292308,6524.36583" id="arrow_down-[#338]"> </path> </g> </g> </g> </g></svg>
            </div>
            <div className={`dropdown-container ${activeCode === skillActiveCode ? 'visible' : ''}`}>
            {
                formActive ? (
                    <div className="skill-form">
                        <InputField
                        id="skill-name"
                        label="Skill"
                        value={skillName}
                        onChange={(e) => setSkillName(e.target.value)}
                        />
                        <div className="form-buttons">
                            <button onClick={handleConfirm} className="confirm-button">Confirm</button>
                            <button className="cancel-button" onClick={()=>{
                                setFormActive(false)
                                setSkillName("")
                            }}>Cancel</button>
                        </div>
                    </div>
                ) : (
                    <React.Fragment>
                            {skills.map(skill => <SkillContainer key={skill.id}
                                                            handleChange={handleChange}
                                                            skill={skill}
                                                            skills = {skills}
                                                            />)}
                            <div className="extra-detail button">
                                <button onClick={()=>setFormActive(true)}>Add Skill</button>
                            </div>
                    </React.Fragment>
                )
            }
        </div>
        </div>
    );
}

export default Skills;