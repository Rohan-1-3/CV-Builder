/* eslint-disable react/prop-types */
import "../cssFiles/Preview.css"

function Preview({details}) {
    return (
        <div className="cv-preview">
            <p>{details.fullName}</p>
        </div>
    );
}

export default Preview;