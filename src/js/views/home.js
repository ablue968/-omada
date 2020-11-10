import React from "react";
import map from "../../img/mapEspaña.png";
import "../../styles/home.scss";

export const Home = () => (
	<div className="jumbotron jumbotron-fluid">
		<div className="container">
			<h1 className="display-4">
				<img src={map} />
			</h1>
			<p className="lead" />
		</div>
	</div>
	/* 
	<div className="text-center mt-5">
		
		<p>
			<img src={map} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div> */
);
