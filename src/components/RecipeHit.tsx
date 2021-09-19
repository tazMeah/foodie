import { HitsEntity } from "../models/RecipeSearchResponseInterface";

export default function RecipeHit({ recipe, _links }: HitsEntity) {
	return (
		<div>
			<img src={recipe.image} />
			<h1>{recipe.label}</h1>
            <p>source: <a href={recipe.url}>{recipe.source}</a></p>
		</div>
	);
}
