import getDetails from "../services/getDetails";
import { useContext, useEffect, useState } from "react";
import recipeDetailsInterface from "../models/recipeDetails";
import { Favorites } from "../context/FavoritesProvider";

export default function RecipeDetails(){
    const [details, setDetails] = useState<recipeDetailsInterface>();
    const id = document.location.pathname.slice(1); // recipe_37b..
	
    const fetchedDetails = useEffect(()=>{
        getDetails(id).then(data => setDetails(data));
    }, [])
    const { addToFavorites, removeFromFavorites, favoritesList } =
			useContext(Favorites);
	// console.log("favoritesList is: ", favoritesList);
	// console.log("favoritesList includes details", favoritesList.some(favorite => favorite.recipe.uri == details?.recipe.uri));
	const thisRecipeIsAFavorite: boolean = favoritesList.some(
		(favorite) => favorite.recipe.uri == details?.recipe.uri
	);
    return (
			<div>
				<h1>{details?.recipe.label}</h1>
				<img src={details?.recipe.image} />
				<p>
					source: <a href={details?.recipe.url}>{details?.recipe.source}</a>
				</p>
				{console.log("details are: ", details)}
				<p>
					<strong>Ingredients</strong>
				</p>
				<ul>
					{details?.recipe.ingredientLines?.map((ingredient, index) => (
						<li key={index}>{ingredient}</li>
					))}
				</ul>
				{thisRecipeIsAFavorite ? <button onClick={()=>{
					removeFromFavorites(details?.recipe.uri!)
				}}>Remove Favorite</button>
				:
				<button
					onClick={() => {
						console.log(details);
                        if (details){
                            addToFavorites(details)
                        }
						
					}}
				>
					Add to Favorites
				</button>}
			</div>
		);
}