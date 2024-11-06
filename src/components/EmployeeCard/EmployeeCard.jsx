import { useState } from "react";
import "./EmployeeCard.css"
import { employees } from "../../data/employees";

function EmployeeCard(props) {
const [role, setRole] = useState(props.initRole)


const clickHandler = ()=>{
  if (role==="Team Lead"){
    setRole(props.initRole);
  }else{
    setRole("Team Lead")
  }

}
  return (
    <div className='EmployeeCard'>
    <h2>{props.name}{role === "Team Lead" && <span>⭐</span>}</h2>
    <p>Role: {props.initRole} {role === "Team Lead" && "(Team Lead)"}</p>
    <p>Sector {props.sector}</p>
    <p>Start Date {props.startDate}</p>
    <p>Email {props.email}</p>
    <button onClick={clickHandler}>{role === "Team Lead" ? "Demote from Team Lead": "Promote to Team Lead"}</button>
    </div> 
  );
};


export default EmployeeCard;




