import { useState } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"

const api_key = import.meta.env.VITE_CLAUDE_API_KEY;

export default function Main(){
    const [ingredients, setIngredients] = useState([])
    const [recipeShown, setRecipeShown] = useState(false)

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
            />
            <ClaudeRecipe recipeShown={recipeShown} />
        </main>
    )
}