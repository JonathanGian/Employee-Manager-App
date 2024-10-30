import EmployeeCard from "../EmployeeCard/EmployeeCard.jsx"
import "./EmployeeList.css"
export function EmployeeList(props) {
  return (
    <div className='EmployeeList'>

        <EmployeeCard name="Mary Jane" initRole="Manager" department="HR" age="35" startdate="18.11.2024" />
        <EmployeeCard name="Tim Cook" initRole="Cleaner" department="Sanitation" age="45" startdate="1.12.2024" />
        <EmployeeCard name="Adelin Jones" initRole="Developer" department="Development" age="22" startdate="30.1.2025" />
        
    </div>
  );
};




export default EmployeeList

