import React, {useState} from 'react'
import { Link } from "react-router-dom";
import "../../styles/contact.css";

const Contact = () => {
    const [contact, setContact] = useState({
        "name": "",
        "email": "",
        "address":"",
        "phone":""
    }) 
    const sendContact = (e) => {
        e.preventDefault()
        fetch("https://playground.4geeks.com/contact/agendas/agenda_avasidr/contacts", {
            method: "POST",
            body: JSON.stringify(contact),
            headers: {"Content-Type": "application/json" }
        })
        .then(response => response.json())
        setContact({
            "name": "",
            "email": "",
            "address":"",
            "phone":""
        })
    }
    
    return (
    <div className='container-fluid body-form'>
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <h1>New Contact</h1>
            <form className='contact-form d-flex flex-column justify-content-center align-items-center' onSubmit={sendContact}>
                <div className="mb-3 col-12">
                    <label className="form-label">Full Name</label>
                    <input 
                        onChange= {(e) => {setContact({...contact, name: e.target.value})}}
                        type="text" 
                        className="form-control" 
                        value={contact.name}
                        />
                </div>
                <div className="mb-3 col-12">
                    <label className="form-label">Email</label>
                    <input 
                        onChange= {(e) => {setContact({...contact, email: e.target.value})}}
                        type="email" 
                        className="form-control" 
                        value={contact.email}
                        />
                </div>
                <div className="mb-3 col-12">
                    <label className="form-label">Phone</label>
                    <input 
                        onChange= {(e) => {setContact({...contact, phone: e.target.value})}}
                        type="text" 
                        className="form-control" 
                        value={contact.phone}
                        />
                </div>
                <div className="mb-3 col-12">
                    <label className="form-label">Address</label>
                    <input 
                        onChange= {(e) => {setContact({...contact, address: e.target.value})}}
                        type="text" 
                        className="form-control" 
                        value={contact.address}
                        />
                </div>
        
                    <button type="submit" className="btn btn-dark mb-2">Submit</button>
            </form>
                        <Link to="/">
							<button className="btn btn-dark">Go Back</button>
						</Link>
        </div>
    </div>
            

    )
}

export default Contact;