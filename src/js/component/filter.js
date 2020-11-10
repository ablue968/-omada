import React from "react";

export const Filter = () => (
	<div className="container">
		<div className="dropdown">
			<button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
				Vamos a filtrar
				<span className="caret" />
			</button>
			<ul className="dropdown-menu">
				<input className="form-control" id="myInput" type="text" placeholder="Search.." />
				<li>
					<a href="#">HTML</a>
				</li>
				<li>
					<a href="#">CSS</a>
				</li>
				<li>
					<a href="#">JavaScript</a>
				</li>
				<li>
					<a href="#">jQuery</a>
				</li>
				<li>
					<a href="#">Bootstrap</a>
				</li>
				<li>
					<a href="#">Angular</a>
				</li>
			</ul>
		</div>
	</div>
);
