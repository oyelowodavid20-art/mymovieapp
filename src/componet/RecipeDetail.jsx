import { useEffect, useState } from "react";
import { data, useParams } from "react-router";

export default function RecipeDetail() {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  useEffect(() => {
    async function RecipeDetail() {
      let res = await fetch(`https://dummyjson.com/recipes/${id}`);
      let data = await res.json();
      setRecipe(data);
      console.log(data);
    }
    RecipeDetail();
  }, []);
  return (
    <div>
      <div className="w-90%">
        <img src={recipe.image} alt="" />
      </div>
      <h1>{recipe.name}</h1>
      <p>{recipe.ingredients}</p>
      <p>{recipe.instructions}</p>
      <p>{id}</p>
    </div>
  );
}
