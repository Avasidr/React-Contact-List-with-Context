import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.loadSomeData()
  }, [])

  const deleteContact = (id) => {
    fetch(`https://playground.4geeks.com/contact/agendas/agenda_avasidr/contacts/${id}`, {
      method: "DELETE",
    })
    .then(response => response.json())
    setTimeout(() => {
      window.location.reload();
    }, 250);
  };

  return (
    <div className="body">
      <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="title-body">Agenda</h1>
      <ul className="card-list">
        {store.agenda.length === 0 ? <h3 className="mt-4">No hay ningún contacto</h3> : 
        store.agenda.map((contact) => (
            <div className="card container contact-card" key={contact.id}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src="https://us.123rf.com/450wm/kiyanochka/kiyanochka1907/kiyanochka190700140/127957069-mujer-sobre-fondo-blanco-estilo-de-dibujo-de-una-l%C3%ADnea-idea-de-tatuaje-.jpg?ver=6" 
                  className="card-img" 
                  alt="contact image" />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">
                      {contact.name}</h5>
                    <p className="card-text">
                      {contact.email}</p>
                    <p className="card-text">
                      {contact.phone}</p>
                    <p className="card-text">
                      {contact.address}
                      </p>
                  </div>
                </div>
                <div className="col-md-2 icons border-start">
                  <Link to={"/edit/" + contact.id}>
                    <button className="btn">
                      <i className="fas fa-user-edit"></i>
                    </button>
                  </Link>
                  <button
                    onClick={() => deleteContact(contact.id)}
                    className="btn"
                    >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </ul>
    </div>
    </div>
    
  );
};
