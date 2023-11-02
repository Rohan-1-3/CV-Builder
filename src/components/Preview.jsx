/* eslint-disable react/prop-types */
import "../cssFiles/Preview.css"

function Preview({ details }) {
    const { fullName, address, phone, email } = details;

    return (
        <div className="cv-preview">
            <div className="cv-container">
                <div className="cv-preview-personal">
                    <h1>{fullName}</h1>
                    <p>{address}</p>
                    {phone !== "" || email !== "" ? (
                        <p>{phone ? phone : ''}
                        {phone !== '' && email !== '' ? ', ' : ''}
                        {email ? email : ''}</p>
                    ) : (
                        <p></p>
                    )}
                </div>
                <div className="professional-summary">
                        <h3>Professional Summary</h3>
                        <p>{details.summary}</p>
                </div>
            </div>
        </div>
    );
}

export default Preview;