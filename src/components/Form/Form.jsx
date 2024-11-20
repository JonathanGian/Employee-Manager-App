import "./Form.css";

const Form = ({ formData, onFormChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFormChange({ [name]: value });
  };

  return (
    <form className="changeForm">
      <input type="text" name="role" value={formData.role} onChange={handleChange} />
      <input type="text" name="sector" value={formData.sector} onChange={handleChange} />
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
    </form>
  );
};

export default Form;