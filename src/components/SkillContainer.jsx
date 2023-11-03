/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import InputField from './InputField';

function SkillContainer({handleChange ,skill, skills}){
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
                            {skill.visibility ? <svg onClick={handleHide} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            : <svg  onClick={handleHide} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5" stroke="#ff0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>}
                        </div>
                    </div>
                )
            }
        </React.Fragment>
    )
}

export default SkillContainer;