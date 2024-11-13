import { useState } from "react";

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
            <form>
                <input 
                type="text" 
                name="role" 
                value={formData.role} 
                onChange={handleChange}  />

                <input 
                type="text" 
                name="sector" 
                value={formData.department} 
                onChange={handleChange}  />

                <input 
                type="text" 
                name="email" 
                value={formData.email} 
                onChange={handleChange}  />
            </form>
        </div>
    );
};



export default Form;