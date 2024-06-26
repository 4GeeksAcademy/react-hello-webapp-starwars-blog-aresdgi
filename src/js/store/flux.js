const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			naves: [
				
			],
			people: [
				
			],
			planets: [
				
			],
			favorites: "inicial desde flux",
			misFavorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			changeFavorites: (titulo) => {
				console.log("change favorites desde flux" + titulo)

				setStore({ favorites: titulo });

				const store = getStore();

				if (store.misFavorites.includes(titulo)) {
					console.log("Ya esta en favoritos")
					setStore({
						misFavorites: store.misFavorites.filter((favor)=>favor != titulo)
					})
				} else {
					setStore({ misFavorites: [...store.misFavorites, titulo] })
				}

				;
			},
			loadSomeData: () => {
				Promise.all([
				  fetch("https://www.swapi.tech/api/starships").then(response => response.json()),
				  fetch("https://www.swapi.tech/api/people").then(response => response.json()),
				  fetch("https://www.swapi.tech/api/planets").then(response => response.json())
				]).then(([starshipsData, peopleData, planetsData]) => {
				  setStore({
					naves: starshipsData.results,
					people: peopleData.results,
					planets: planetsData.results

				  });
				}).catch(error => {
				  console.error('Error al cargar datos:', error);
				});
			  }
			  ,
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;