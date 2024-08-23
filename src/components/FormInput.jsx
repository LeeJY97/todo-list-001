const FormInput = ({ inputRef, value, onChange }) => {
  console.log('value', value);
  return <input type='text' value={value} onChange={(e) => onChange(e)} ref={inputRef} />;
};

export default FormInput;
