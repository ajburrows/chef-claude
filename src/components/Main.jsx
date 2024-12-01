import { useState } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"

export default function Main(){
    const [ingredients, setIngredients] = useState([])
    const [recipeShown, setRecipeShown] = useState(false)

    const ingredients_list_items = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))


    function addIngredient(form_data) {
        const new_ingredient = form_data.get("ingredient")
        setIngredients(prev_ingredients => [...prev_ingredients, new_ingredient])
        console.log(new_ingredient)
    }

    function toggleRecipeShown(){
        setRecipeShown(prev_status => !prev_status)
    }

    return(
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <IngredientsList 
                toggleRecipeShown={toggleRecipeShown}
                ingredients={ingredients}
                ingredients_list_items={ingredients_list_items}
            />
            <ClaudeRecipe recipeShown={recipeShown} />
        </main>
    )
}