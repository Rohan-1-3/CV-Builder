/* eslint-disable react/prop-types */


const InputField = ({ id, label, value, onChange, type="text" }) => {
    return (
      <div className={`input-div ${id}`}>
        <input
          className={id}
          id={id}
          type={type}
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