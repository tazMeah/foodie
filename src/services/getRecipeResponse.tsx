import axios from "axios";
import RecipeSearchResponseInterface from "../models/RecipeSearchResponseInterface";
import SearchParams from "../models/SearchParams";

export default function getRecipeResponse(searchParams: SearchParams): Promise<RecipeSearchResponseInterface> {
	const diet = searchParams.diet || undefined;
	return axios
		.get("https://api.edamam.com/api/recipes/v2", {
			params: {
				type: "public",
				q: searchParams.recipeQuery,
				app_id: process.env.REACT_APP_APP_ID,
				app_key: process.env.REACT_APP_APP_KEY,
                diet: diet
                
			},
		})
		.then((response) => {
			console.log(response.data);
			return response.data;
		});
}