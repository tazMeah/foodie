import getDetails from "../services/getDetails";
import { useEffect, useState } from "react";
import recipeDetailsInterface from "../models/recipeDetails";
export default function RecipeDetails(){
    const [details, setDetails] = useState<recipeDetailsInterface>();
    const id = document.location.pathname.slice(1); // recipe_37b..
    const fetchedDetails = useEffect(()=>{
        getDetails(id).then(data => setDetails(data));
        
    }, [])
    return (
        <div>
            <h1>{details?.recipe.label}</h1>
            <img src={details?.recipe.image}/>
            <p>source: <a href={details?.recipe.url}>{details?.recipe.source}</a></p>
            {console.log("details are: ", details)}
            <p><strong>Ingredients</strong></p>
            <ul>
                {details?.recipe.ingredientLines?.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
            </ul>
        </div>
    )
}