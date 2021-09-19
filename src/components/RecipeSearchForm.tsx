import { useState } from "react";
import SearchParams from "../models/SearchParams";

export default function RecipeSearchForm({
	onSubmit,
}: {
	onSubmit: (searchParams: SearchParams) => void;
}) {
	const [recipeQuery, setRecipeQuery] = useState("");
	const [diet, setDiet] = useState("");
	
    
	return (
		<div className="RecipeSearchForm">
			<form onSubmit={(e) => {
                e.preventDefault();
                onSubmit({recipeQuery, diet});
                }}>
				<input
					type="text"
					value={recipeQuery}
					onChange={(e) => {
						setRecipeQuery(e.target.value);
					}}
				/>
				<label htmlFor="diet">Diet:
					<select id="diet" name="diet" onChange={(e) => {
						console.log(e.target.value);
						setDiet(e.target.value);
						}}>
						<option value="" defaultChecked>optional</option>
						<option value="balanced">balanced</option>
						<option value="high-fiber">high-fiber</option>
						<option value="high-protein">high-protein</option>
						<option value="low-carb">low-carb</option>
						<option value="low-fat">low-fat</option>
						<option value="low-sodium">low-sodium</option>
					</select>
				</label>
				
			</form>
		</div>
	);
}