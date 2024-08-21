import { useState } from 'react';

function MyForm () {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> Name:
                <input 
                type="text"
                name="name"
                value={inputs.name || ""}
                onChange={handleChange}
                />
            </label>
            <label> Email Address: 
                <input 
                type="text"
                name="emailAddress"
                value={inputs.emailAddress || ""}
                onChange={handleChange}
                />
            </label>
            <label> Message:
                <input 
                type="text"
                name="message"
                value={inputs.message || ""}
                onChange={handleChange}
                />
            </label>
            <div className="submit">
                <button className="submit-button" type="submit">submit</button>
            </div>
        </form>
    )
};

export default function Contact() {
    return (
        <>
        <div className="sections-contact">
                <h1>Contact</h1>
                <MyForm />
            </div>
        </>
    )
}


// name email message submit 