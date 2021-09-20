import axios from "axios";
import recipeDetailsInterface from "../models/recipeDetails";

export default function getDetails(recipeId:string): Promise<recipeDetailsInterface> {
    return axios
			.get(
				`https://api.edamam.com/api/recipes/v2/%23${recipeId}`,
				{
					params: {
						type: "public",
						app_id: process.env.REACT_APP_APP_ID,
						app_key: process.env.REACT_APP_APP_KEY,
					},
				}
			)
			.then((response) => {
				console.log(response.data);
				return response.data;
			});
}