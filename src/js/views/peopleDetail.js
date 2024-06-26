import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PeopleDetail = props => {
	const { store, actions } = useContext(Context);
    const [people, setPeople] = useState({})
	const params = useParams();
    useEffect(()=>{
        console.log("se cargo vista people")
        fetch("https://www.swapi.tech/api/people/" + params.people_id)
					.then( (response)=> response.json() )
					.then( (data)=> setPeople(data.result.properties) )
    },[])
	console.log(params)
	return (
		<div className="jumbotron bg-dark text-warning p-4">
			<h1 className="display-4">{people.name}</h1>
            <img className="card-img-top border border-dark border-4 mt-1" src="https://cdn.shopify.com/s/files/1/0279/0234/5304/products/kfcwnjk8nplyqgigl9a9.jpg?v=1673425931&width=1946" alt="Card image cap"/>
			<hr className="my-4" />
            <p>Name: <span className="text-white">{people.name}</span></p>
            <p>Height: <span className="text-white">{people.height}</span></p>
            <p>Mass: <span className="text-white">{people.mass}</span></p>
            <p>Hair Color: <span className="text-white">{people.hair_color}</span></p>
            <p>Skin Color: <span className="text-white">{people.skin_color}</span></p>
            <p>ID: <span className="text-white">{params.people_id}</span></p>
            

			<Link to="/">
				<span className="btn btn-dark border border-3 border-warning btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

PeopleDetail.propTypes = {
	match: PropTypes.object
};