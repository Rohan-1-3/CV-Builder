/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import InputField from "./InputField";
import ExperienceContainer from "./ExperienceContainer";

function WorkExperience({details, onUpdate, activeCode, handleActiveCode}) {
    const [workExperienceList, setWorkExperienceList] = useState(details);
    const [formActive, setFormActive] = useState(false);
    const [newWorkExperience, setNewWorkExperience] = useState({
        position: "",
        company: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
        id: uuid(),
        active: false,
        visibility: true
    });

    useEffect(() => {
        setWorkExperienceList(details);
    }, [details]);

    useEffect(() => {
        onUpdate(workExperienceList);
    }, [workExperienceList]);

    const workExperienceActiveCode = 3;

    const handleExperienceChange = (field, value) => {
        const updatedPosition = { ...newWorkExperience }; // 'position' holds the state for the work experience details
        updatedPosition[field] = value;
        setNewWorkExperience(updatedPosition); // 'setPosition' is the function to update the state for work experience
    };

    const handleConfirm = () => {
        setWorkExperienceList(prevWorkExperience => [...prevWorkExperience, newWorkExperience]);
        setFormActive(false);

        setNewWorkExperience({
            position: "",
            company: "",
            startDate: "",
            endDate: "",
            location: "",
            description: "",
            id: uuid(),
            active: false,
            visibility: true
        });
    };

    const handleChange = newWorkExperienceList => {
        setWorkExperienceList(newWorkExperienceList);
    };


    return (
        <div className="experience-container extra-detail">
        <div className="title-education title-detail" onClick={()=>{
            (activeCode === workExperienceActiveCode) ? handleActiveCode(0) :handleActiveCode(workExperienceActiveCode);
        }}>
            <h2>Experience</h2>
            <svg className={activeCode === workExperienceActiveCode ? "rotate" : ""} viewBox="0 -4.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow_down [#338]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-220.000000, -6684.000000)" fill="#9e9e9e"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M164.292308,6524.36583 L164.292308,6524.36583 C163.902564,6524.77071 163.902564,6525.42619 164.292308,6525.83004 L172.555873,6534.39267 C173.33636,6535.20244 174.602528,6535.20244 175.383014,6534.39267 L183.70754,6525.76791 C184.093286,6525.36716 184.098283,6524.71997 183.717533,6524.31405 C183.328789,6523.89985 182.68821,6523.89467 182.29347,6524.30266 L174.676479,6532.19636 C174.285736,6532.60124 173.653152,6532.60124 173.262409,6532.19636 L165.705379,6524.36583 C165.315635,6523.96094 164.683051,6523.96094 164.292308,6524.36583" id="arrow_down-[#338]"> </path> </g> </g> </g> </g></svg>
        </div>
        <div className={`dropdown-container ${activeCode === workExperienceActiveCode ? 'visible' : ''}`}>
        {
            formActive ? (
                <div className='experience-form'>
                <InputField
                id="position"
                label="Position"
                value={newWorkExperience.position}
                onChange={(e) => handleExperienceChange('position', e.target.value)}
                />

                <InputField
                    id="company"
                    label="Company"
                    value={newWorkExperience.company}
                    onChange={(e) => handleExperienceChange('company', e.target.value)}
                />

                <InputField
                    id="startDate"
                    label="Start Date"
                    value={newWorkExperience.startDate}
                    onChange={(e) => handleExperienceChange('startDate', e.target.value)}
                    type="month"
                />

                <InputField
                    id="endDate"
                    label="End Date"
                    value={newWorkExperience.endDate}
                    onChange={(e) => handleExperienceChange('endDate', e.target.value)}
                />

                <InputField
                    id="location"
                    label="Location"
                    value={newWorkExperience.location}
                    onChange={(e) => handleExperienceChange('location', e.target.value)}
                />

                <div className="input-div">
                    <textarea value={newWorkExperience.description} className="summary" placeholder="Write about your role in company"
                        onChange={e=> handleExperienceChange('description', e.target.value)}>
                    </textarea>
                </div>


                    <div className="form-buttons">
                        <button onClick={handleConfirm} className="confirm-button">Confirm</button>
                        <button className="cancel-button" onClick={()=>{
                            setFormActive(false)
                        }}>Cancel</button>
                    </div>

                </div>
            ) : (
                <React.Fragment>
                    {workExperienceList.map(work => <ExperienceContainer
                                key={work.id}
                                work = {work}
                                workExperienceList={workExperienceList}
                                handleChange = {handleChange}
                                />
                    )}
                    <div className="extra-detail button">
                        <button onClick={()=>setFormActive(true)}>Add Experience</button>
                    </div>
                </React.Fragment>
            )
        }
        </div>
        </div>
    );
}

export default WorkExperience;