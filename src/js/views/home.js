import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.css";
import { Nave } from "../component/nave";
import { Context } from "../store/appContext";
import { People } from "../component/people";
import { Planets } from "../component/planets";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [starships, setStarships] = useState([])
	// useEffect(()=>{
    //     console.log("se cargo home")
	// 	fetch("https://www.swapi.tech/api/starships")
	// 	.then((response)=> response.json())
	// 	.then((data)=> setStarships(data.results))
    // },[])

	return (
		<div>
			<div className="text-center mt-5">
				{/* <h1 className="text-warning">Naves desde API en Home</h1>
					{starships.map( (item)=> <Nave key={item.uid} title={item.name} />)} */}


					
					{/* Estas de cargan desde FLUX */}
				<h1 className="text-warning bg-dark">CHARACTERS</h1> 
				<div className="row flex-row flex-nowrap overflow-auto">
					{store.people.map( (item)=> <People key={item.uid} uid={item.uid} title={item.name} />)}
				</div>
			</div>
			<div className="text-center mt-5">
				<h1 className="text-warning bg-dark">STARSHIPS</h1>
				<div className="row flex-row flex-nowrap overflow-auto">
					{store.naves.map( (item)=> <Nave key={item.uid} uid={item.uid} title={item.name} />)}
				</div>
			</div>
			<div className="text-center mt-5">
				<h1 className="text-warning bg-dark">PLANETS</h1>
				<div className="row flex-row flex-nowrap overflow-auto">
					{store.planets.map( (item)=> <Planets key={item.uid} uid={item.uid} title={item.name} />)}
				</div>
			</div>
		</div>
	)
};