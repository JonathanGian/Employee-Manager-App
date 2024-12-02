import { useState } from "react";
import "./EmployeeCard.css";

import CardForm from "../CardForm/CardForm";
import ButtonUsage from "../Button/Button";

function EmployeeCard({ initRole = "Employee", startDate, name = "Unknown", role = "", sector = "", email = "", onSave }) {
  const [formData, setFormData] = useState({
    role: initRole || "",
    sector: sector || "",
    email: email || "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Model Toggle
  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  // Years calculator
  const calculateYearsWorked = () => {
    if (!startDate) return "N/A";
    const startYear = new Date(startDate).getFullYear();
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  };
  const yearsWorked = calculateYearsWorked();

// Toggle Promotion
  const handlePromotionToggle = () => {
    setFormData((prev) => ({
      ...prev,
      role: prev.role === "Team Lead" ? initRole : "Team Lead",
    }));
  };

// Handle Save
  const handleSave = () => {
    const updatedData = { name, role: formData.role, sector: formData.sector, startDate, email };
    console.log("Saving data:", updatedData);
    if (onSave) {
      onSave(updatedData);// Notify parent component to update
    }
    toggleModal();
  };

  // Toggle Edit
  const toggleEdit = () => {
    if (isEditing) {
      handleSave();
    }
    setIsEditing((prev) => !prev);
  };



  return (
    <div className="EmployeeCard">
      <img src={`https://robohash.org/${name}/?set=set5`} alt="Profile" />
      <h2>
        {name} {formData.role === "Team Lead" && <span>⭐</span>}
      </h2>
      <p>Role: {formData.role}</p>
      <p>Sector: {formData.sector}</p>
      <p>Start Date: {startDate}</p>
      <p>Email: {formData.email}</p>
      <p>Years Employed: {yearsWorked}</p>
      <ButtonUsage onClick={toggleModal} text="Edit" />

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={toggleModal}>
              &times;
            </button>
            <h3>Edit Employee Details</h3>
            <CardForm formData={formData} onFormChange={setFormData} />
            <ButtonUsage onClick={handleSave} text="Save" />
          </div>
        </div>
      )}
    </div>
  );
}

export default EmployeeCard;