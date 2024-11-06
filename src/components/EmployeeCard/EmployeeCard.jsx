import { useState } from "react";
import "./EmployeeCard.css";

function EmployeeCard(props) {
  const [promotionRole, setRole] = useState(props.initRole);

  const calculateYearsWorked = () => {
    if (!props.startDate) return "N/A"; // Return 'N/A' if no startDate is provided

    const startYear = new Date(props.startDate).getFullYear(); // Extract the year from startDate
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
      setRole(props.initRole);
    } else {
      setRole("Team Lead");
    }
  };

  // Calculate years worked
  const yearsWorked = calculateYearsWorked();

  return (
    <div className="EmployeeCard">
      <h2>{props.name} {promotionRole === "Team Lead" && <span>⭐</span>}</h2>
      <p>Role: {props.role} {promotionRole === "Team Lead" && "(Team Lead)"}</p>
      <p>Sector: {props.sector}</p>
      <p>Start Date: {props.startDate}</p>
      <p>Email: {props.email}</p>
      <p>Years Employed: {yearsWorked}</p>
      {displayReminders(yearsWorked)} {/* Display reminders here */}
      <button onClick={clickHandler}>
        {promotionRole === "Team Lead" ? "Demote from Team Lead" : "Promote to Team Lead"}
      </button>
    </div>
  );
}

export default EmployeeCard;