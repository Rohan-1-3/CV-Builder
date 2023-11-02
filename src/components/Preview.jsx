/* eslint-disable react/prop-types */
import "../cssFiles/Preview.css"

function Preview({ details }) {
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
            </div>
        </div>
    );
}

export default Preview;