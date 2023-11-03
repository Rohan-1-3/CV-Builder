/* eslint-disable react/prop-types */
import "../cssFiles/Preview.css"

function Preview({ details, skillsList, educationList }) {
    const { fullName, address, phone, email } = details;
    const phoneNum = phone.trim();
    const emailAdd = email.trim();

    function getMonthName(monthNumber) {
        const months = [
          "Jan", "Feb", "Mar", "Apr",
          "May", "Jun", "Jul", "Aug",
          "Sep", "Oct", "Nov", "Dec"
        ];

        if (monthNumber >= 1 && monthNumber <= 12) {
          return months[monthNumber - 1];
        } else {
          return "Invalid Month";
        }
      }

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
                        <div className="school">
                            {educationList.map(edu =>
                                <div key={edu.id} className={edu.visibility ? "" : "hidden"}>
                                    {
                                        (edu.institution !== "" || edu.location !== "") && (
                                          <p className="school-name">
                                            {edu.institution && <span>{edu.institution}</span>}
                                            {edu.institution !== '' && edu.location !== '' && <span> - </span>}
                                            {edu.location && <span>{edu.location}</span>}
                                          </p>
                                        )
                                      }

                                      {
                                        (edu.name !== "" || edu.startDate.split("-")[0] !== "" || edu.endDate !== "") && (
                                          <p>
                                            {edu.name && <span>{edu.name}</span>}
                                            {(edu.name !== '' && (edu.startDate.split("-")[0] !== '' || edu.endDate !== '')) && <span> | </span>}
                                            {edu.startDate.split("-")[0] && <span>{getMonthName(edu.startDate.split("-")[1])} {edu.startDate.split("-")[0]}</span>}
                                            {edu.startDate.split("-")[0] !== '' && edu.endDate !== '' && <span> - </span>}
                                            {edu.endDate && <span>{edu.endDate}</span>}
                                          </p>
                                        )
                                      }
                                </div>)}
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Preview;