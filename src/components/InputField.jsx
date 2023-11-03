/* eslint-disable react/prop-types */


const InputField = ({ id, label, value, onChange }) => {
    return (
      <div className={`input-div ${id}`}>
        <input
          className={id}
          id={id}
          value={value}
          onChange={onChange}
          autoComplete="off"
          placeholder=" "
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  };

export default InputField;