import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Ñomada</span>
			</Link>

			<form className="form-inline my-2 my-lg-0 mx-auto">
				<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
				{/*<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
					Search
    </button>*/}
			</form>
			<div className="ml-auto">
				<Link to="/aboutus">
					<button className="btn btn-primary">About us</button>
				</Link>
				<Link to="/aboutus">
					<button className="btn btn-primary">Favoritos</button>
				</Link>
				<Link to="/aboutus">
					<button className="btn btn-primary">Login</button>
				</Link>
			</div>
		</nav>
	);
};
