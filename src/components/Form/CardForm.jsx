import "./CardForm.css";

function CardForm({ formData, onFormChange }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFormChange((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <form>
      <div>
        <label htmlFor="role">Role:</label>
        <input
          type="text"
          id="role"
          name="role"
          value={formData.role || ""} // Fallback to empty string
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="sector">Sector:</label>
        <input
          type="text"
          id="sector"
          name="sector"
          value={formData.sector || ""} // Fallback to empty string
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email || ""} // Fallback to empty string
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
}
export default CardForm; 