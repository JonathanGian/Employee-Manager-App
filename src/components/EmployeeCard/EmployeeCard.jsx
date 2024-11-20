import { useState } from "react";
import "./EmployeeCard.css";
import Button from "../Button/Button";
import Form from "../Form/Form";

function EmployeeCard({initRole,startDate,name,role,sector,email}) {
  const [formData, setFormData] = useState({role, sector, email});
  const [isEditing, setIsEditing] = useState(false)
  const [promotionRole, setRole] = useState(initRole);
  const [toggleFormEdit, setToggleFormEdit] = useState(false);

  const updateFormData = (updatedData) => {
    setFormData((prev)=>({...prev, ...updatedData}));
  };

  const calculateYearsWorked = () => {
    if (!startDate) return "N/A"; // Return 'N/A' if no startDate is provided

    const startYear = new Date(startDate).getFullYear(); // Extract the year from startDate
    const currentYear = new Date().getFullYear(); // Get the current year

    const yearsWorked = currentYear - startYear; 
    return yearsWorked; // Return the years worked
  };

  // Function to display reminders based on years worked
  const displayReminders = (yearsWorked) => {
    if (yearsWorked < 0.5) {
      return (
        <div className="reminder probation">
          <span>🔔</span> Schedule probation review.
        </div>
      );
    }

    if (yearsWorked % 5 === 0) {
      return (
        <div className="reminder anniversary">
          <span>🎉</span> Schedule recognition meeting.
        </div>
      );
    }

    return null; // No reminder if not meeting either condition
  };

  const clickHandler = () => {
    if (promotionRole === "Team Lead") {
      setRole(initRole);
    } else {
      setRole("Team Lead");
    }
  };

  const toggleEdit = () => {
    if (isEditing){
      console.log("Saved changes:",formData);
    }
    setIsEditing((prev)=> !prev);
  }
  

  // Calculate years worked
  const yearsWorked = calculateYearsWorked();

  return (
    <div className="EmployeeCard">
      <img src={`https://robohash.org/${name}/?set=set5`} alt="Profile"/>
      <h2>{name} {promotionRole === "Team Lead" && <span>⭐</span>}</h2>
      <p>Role: {formData.role} {promotionRole === "Team Lead" && "(Team Lead)"}</p>
      <p>Sector: {formData.sector}</p>
      <p>Start Date: {startDate}</p>
      <p>Email: {formData.email}</p>
      <p>Years Employed: {yearsWorked}</p>
      {displayReminders(yearsWorked)} {/* Display reminders here */}
      <Button 
      onClick={clickHandler} 
      text={promotionRole === "Team Lead" ? "Demote from Team Lead" : "Promote to Team Lead"}
      role = {promotionRole ? "primary":"secondary"}/>
     
    <Button onClick={toggleEdit} text={isEditing ? "Save":"Edit"} />
    {isEditing && <Form formData={formData} onFormChange={updateFormData}/>
      }
    
    </div>

  );
}

export default EmployeeCard;