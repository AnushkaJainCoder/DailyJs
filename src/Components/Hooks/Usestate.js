import { useState } from "react";

export default function FormComponent(){
    const [name, setame] = useState('');
    const [emaill, setemail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({name});
        

        // alert()
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text"  value={name} onChange={(e) => setame(e.target.value)}/>
                <label>Contact</label>
                <input type='mail' value={emaill} onChange={(e) => setemail(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        
        </>
    )
}