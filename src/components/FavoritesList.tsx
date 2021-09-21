import { Favorites } from "../context/FavoritesProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function FavoritesList() {
    const {addToFavorites, removeFromFavorites, favoritesList} = useContext(Favorites)
    return (
			<div>
				<ul>
					{favoritesList.map((favorite, index) => (
						<li key={index}>
							<Link
								to={
									"/" +
									favorite.recipe.uri.slice(
										favorite.recipe.uri.indexOf("#") + 1
									)
								}
							>
								<img src={favorite.recipe.image} />
								<h3>{favorite.recipe.label}</h3>
							</Link>
                                <button onClick={()=>{removeFromFavorites(favorite.recipe.uri)}}>Remove Favorite</button>
						</li>
					))}
				</ul>
			</div>
		);
}