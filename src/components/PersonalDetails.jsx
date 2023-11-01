/* eslint-disable react/prop-types */
// import React from 'react';

import { useEffect, useState } from "react";

const InputField = ({ id, label, value, onChange }) => {
  return (
    <div className={`input-div ${id}`}>
      <input
        className={id}
        id={id}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

function PersonalDetails({details, onUpdate}) {
    const [personalDetail, setPersonalDetail] = useState(details);

    useEffect(()=>{
        onUpdate(personalDetail)
    }, [onUpdate, personalDetail]);

    const handleInputChange = (field, value) => {
        setPersonalDetail({ ...personalDetail, [field]: value });
    };

    return (
        <div className='personal-details'>
            <InputField
            id="full-name"
            label="Full Name"
            value={personalDetail.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            />

            <InputField
                id="phone"
                label="Phone"
                value={personalDetail.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
            />

            <InputField
                id="email"
                label="Email"
                value={personalDetail.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
            />

            <InputField
                id="address"
                label="Address"
                value={personalDetail.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
            />
        </div>
    );
}

export default PersonalDetails;