import React, {useState} from 'react';


import classes from './Contact.module.css'

const Contact = () => {
    const [emailInput, setEmailInput] = useState("");
    const [messageInput, setMessageInput] = useState("");
    const [isInvalid, setIsInvalid] = useState(true);

    const handleEmailChange = (e) => {
        setEmailInput(e.target.value);
        if (emailInput.trim() === '' ) {
            setIsInvalid(true);
        } else if (!emailInput.trim().includes("@")) {
            setIsInvalid(true);
        } else {
            setIsInvalid(false);
        }
    };

    const handleMessageChange = (e) => {
        setMessageInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleEmailChange(e);
        if (isInvalid === false) {
            alert(`Please note that this contact form is just for demostration purposes, and doesn't actually send any data. \nYour Message: ${messageInput}`);
            setEmailInput('');
        } else {
            alert("Please enter a valid email.");
            
        }
        

        
    };

    return (
        <div className={classes.contact}>
            <h2>Contact</h2>
            <form> 
                <label htmlFor="email">Email {isInvalid && <sup className="text-danger">*</sup>}</label>
                <input type="email" id="email" label="Email" onChange={handleEmailChange} required />
                <br />
                <textarea placeholder="Type your message" id="message" onChange={handleMessageChange} rows="10" cols="30" />
                <br />
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
};

export default Contact;