import { useState } from "react";
import "./EmployeeCard.css"
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
    <h2>{props.name}</h2>
    <p>Role: {role}</p>
    <p>Department: {props.department}</p>
    <p>Age: {props.age}</p>
    <p>Start Date:{props.startdate}</p>
    <button onClick={clickHandler}>Promote</button>
    </div>
  );
};


export default EmployeeCard;




