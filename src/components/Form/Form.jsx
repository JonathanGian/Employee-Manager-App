import { useState } from "react";
import "./Form.css"
const Form = ({role, sector, email}) => {
    const [formData, setFormData] = useState({
        role,
        sector,
        email,
    })
    const handleChange = (e)=> {
        const {name, value} = e.target;
        setFormData((prevState) => ({...prevState,[name]: value}))
    }

    return (
        <div>
            <form className="changeForm">
                <input 
                type="text" 
                name="role" 
                value={formData.role} 
                onChange={handleChange}  />

                <input 
                type="text" 
                name="sector" 
                value={formData.sector} 
                onChange={handleChange}  />

                <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange}  />
            </form>
        </div>
    );
};



export default Form;