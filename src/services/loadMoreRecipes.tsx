import axios from "axios";
import RecipeSearchResponseInterface from "../models/RecipeSearchResponseInterface";


export default function loadMoreRecipes(url: string): Promise<RecipeSearchResponseInterface> {
	
	return axios
		.get(url)
		.then((response) => {
			console.log(response.data);
			return response.data;
		});
}