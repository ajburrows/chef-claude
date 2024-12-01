import { useState } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from "../ai"

export default function Main(){
    const [ingredients, setIngredients] = useState([])

    function addIngredient(form_data) {
        const new_ingredient = form_data.get("ingredient")
        setIngredients(prev_ingredients => [...prev_ingredients, new_ingredient])
        console.log(new_ingredient)
    }

    const [recipeMarkdown, setRecipeMarkdown] = useState("")

    function getRecipe(){
        const new_recipe_markdown = getRecipeFromMistral(ingredients)
        setRecipeMarkdown(new_recipe_markdown)
        console.log(new_recipe_markdown)

        
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
                getRecipe={getRecipe}
                ingredients={ingredients}
            />
            <ClaudeRecipe recipeMarkdown={recipeMarkdown}/>
        </main>
    )
}