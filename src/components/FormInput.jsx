const FormInput = ({ inputRef, value, onChange }) => {
  return <input type='text' value={value} onChange={(e) => onChange(e)} ref={inputRef} />;
};

export default FormInput;
