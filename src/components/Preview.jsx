/* eslint-disable react/prop-types */
import "../cssFiles/Preview.css"

function Preview({details}) {
    return (
        <div className="cv-preview">
            <div className="cv-preview-personal">
                <h1>{details.fullName}</h1>
                <p>{details.address}</p>
                <p>{details.phone}, {details.email}</p>
            </div>
        </div>
    );
}

export default Preview;