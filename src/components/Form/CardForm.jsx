import "./CardForm.css";

const CardForm = ({ formData, onFormChange }) => {
  console.log(formData)
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFormChange({ [name]: value });
  };

  return (
    <form className="changeForm">
      <div>
      <label htmlFor="role">Role</label>
      <input type="text" name="role" id="role" value={formData.role} onChange={handleChange} />
      </div>
      <div>
      <label htmlFor="sector">Sector</label>
      <input type="text" name="sector"id="sector" value={formData.sector} onChange={handleChange} />
      </div>
      <div>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
    </form>
  );
};

export default CardForm; 