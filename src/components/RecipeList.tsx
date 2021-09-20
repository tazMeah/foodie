import { useState } from "react";
import getRecipeResponse from "../services/getRecipeResponse";
import RecipeSearchForm from "./RecipeSearchForm";
import RecipeSearchResponseInterface from "../models/RecipeSearchResponseInterface";
import RecipeHit from "./RecipeHit";
import SearchParams from "../models/SearchParams";
import loadMoreRecipes from "../services/loadMoreRecipes";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RecipeDetails from "./RecipeDetails";

export default function RecipeList() {
	const [recipeSearchResponse, setRecipeSearchResponse] =
		useState<RecipeSearchResponseInterface>();

	function onSubmit(searchParams: SearchParams): void {
		getRecipeResponse(searchParams).then((data) =>
			setRecipeSearchResponse(data)
		);
	}
	return (
		<div>
			{/* <button onClick={() => {getRecipeResponse()}}>Get axios response</button> */}

			<Router>
				<Switch>
					<Route path="/:recipeId" exact>
						<RecipeDetails />
					</Route>
					<Route path="/" exact>
						<h1>Recipe Search</h1>
						<RecipeSearchForm onSubmit={onSubmit} />
						{recipeSearchResponse?.hits?.map((hit, index) => (
							<RecipeHit recipe={hit.recipe} _links={hit._links} key={index} />
						))}

						{recipeSearchResponse && (
							<button
								onClick={() => {
									loadMoreRecipes(recipeSearchResponse._links.next.href).then(
										(data) => {
											// copy then modify
											let moreRecipes = { ...recipeSearchResponse };
											// get the Next link and overwrite
											moreRecipes._links.next.href = data._links.next.href;
											data.hits?.forEach((hit) => moreRecipes.hits?.push(hit));
											setRecipeSearchResponse(moreRecipes);
										}
									);
								}}
							>
								Load More
							</button>
						)}
					</Route>
				</Switch>
			</Router>
		</div>
	);
}
