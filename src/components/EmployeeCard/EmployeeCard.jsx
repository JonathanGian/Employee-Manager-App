import { useState } from "react";
import "./EmployeeCard.css";
import Button from "../Button/Button";
import Form from "../Form/Form";

function EmployeeCard({initRole,startDate,name,role,sector,email}) {
  const [promotionRole, setRole] = useState(initRole);
  const [toggleFormEdit, setToggleFormEdit] = useState(false);


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
  

  // Calculate years worked
  const yearsWorked = calculateYearsWorked();

  return (
    <div className="EmployeeCard">
      <img src={`https://robohash.org/${name}/?set=set5`}/>
      <h2>{name} {promotionRole === "Team Lead" && <span>⭐</span>}</h2>
      <p>Role: {role} {promotionRole === "Team Lead" && "(Team Lead)"}</p>
      <p>Sector: {sector}</p>
      <p>Start Date: {startDate}</p>
      <p>Email: {email}</p>
      <p>Years Employed: {yearsWorked}</p>
      {displayReminders(yearsWorked)} {/* Display reminders here */}
      <Button 
      onClick={clickHandler} 
      text={promotionRole === "Team Lead" ? "Demote from Team Lead" : "Promote to Team Lead"}
      role = {promotionRole ? "primary":"secondary"}/>
     
    <Button onClick={()=>setToggleFormEdit(!toggleFormEdit)} text={toggleFormEdit ? "Save":"Edit"} />
    {toggleFormEdit && (
      <Form
      role={role}
      sector={sector}
      email={email}
      />
    )}
    
    </div>

  );
}

export default EmployeeCard;