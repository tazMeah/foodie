import { HitsEntity } from "../models/RecipeSearchResponseInterface";
import { Link } from "react-router-dom";
export default function RecipeHit({ recipe, _links }: HitsEntity) {
	const id =recipe.uri.slice(recipe.uri.indexOf("#") + 1);
	console.log("the id is: ", id);
	return (
		<div>
			<Link to={id}>
			<img src={recipe.image} />
			</Link>
			<h1>{recipe.label}</h1>
            <p>source: <a href={recipe.url}>{recipe.source}</a></p>
		</div>
	);
}
