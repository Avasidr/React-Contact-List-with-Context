import React, {useEffect, useState} from 'react'
import { Link, useParams } from "react-router-dom";

import "../../styles/contact.css";

const EditContact = () => {
    const [contact, setContact] = useState({
        "name": "",
        "email": "",
        "address":"",
        "phone":""
    }) 

    const params = useParams();

    /*useEffect(() => {
        fetch(`https://playground.4geeks.com/apis/fake/contact/${params.id}`)
        .then(response => response.json())
        .then(response => setContact(response))
    }, [])*/

    const updateContact = (e) => {
        e.preventDefault()
        fetch(`https://playground.4geeks.com/contact/agendas/agenda_avasidr/contacts/${params.id}`,{
            method: "PUT",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(contact)
            
        })
        
    }
    
    return (
        <div>
            <div className='container-fluid body-form d-flex flex-column justify-content-center align-items-center'>
            <h1>Hola {contact.name}</h1>
            <form className='contact-form d-flex flex-column justify-content-center align-items-center' onSubmit={updateContact}>
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
        
                    <button type="submit" className="btn btn-dark">Submit</button>
            </form>
                        <Link to="/">
							<button className="btn btn-dark">Go Back</button>
						</Link>
            </div>
            
        </div>
    )
}

export default EditContact;