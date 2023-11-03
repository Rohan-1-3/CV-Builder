/* eslint-disable react/prop-types */
import "../cssFiles/Preview.css"

function Preview({ details, skillsList, educationList }) {
    const { fullName, address, phone, email } = details;
    const phoneNum = phone.trim();
    const emailAdd = email.trim();

    return (
        <div className="cv-preview">
            <div className="cv-container">
                <div className="cv-preview-personal">
                    <h1>{fullName}</h1>
                    <p>{address}</p>
                    {phoneNum !== "" || emailAdd !== "" ? (
                        <p>{phoneNum ? phoneNum : ''}
                        {phoneNum !== '' && emailAdd !== '' ? ', ' : ''}
                        {emailAdd ? emailAdd : ''}</p>
                    ) : (
                        <p></p>
                    )}
                </div>
                <div className="professional-summary">
                        {details.summary.trim() !== "" && <h3>Professional Summary</h3>}
                        <p>{details.summary}</p>
                </div>
                <div className="skills-list">
                {(skillsList.filter(skill => skill.visibility === true)).length > 0 && <h3>Skills</h3>}
                    <ul>
                        {skillsList.map(skill => <li className={skill.visibility ? "" : "hidden"}
                            key={skill.id}>{skill.skillName}</li>)}
                    </ul>
                </div>

                <div className="education-list">
                        {(educationList.filter(edu => edu.visibility === true)).length > 0 && <h3>Education</h3>}
                        <div className="hello">
                            {educationList.map(edu => <div key={edu.id} className={edu.visibility ? "" : "hidden"}>{edu.id}</div>)}
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Preview;