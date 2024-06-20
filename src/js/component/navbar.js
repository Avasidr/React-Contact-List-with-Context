import React from "react";
import { Link } from "react-router-dom";

import "../../styles/home.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light stile-navbar">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 homeLink">My Contacts</span>
			</Link>
			<div className="create-btn">
				<Link to="/contact">
					<button className="btn btn-dark">Create new contact</button>
				</Link>
			</div>
		</nav>
	);
};
