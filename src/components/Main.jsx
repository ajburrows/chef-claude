import { useState } from "react"

export default function Main(){
    const [ingredients, setIngredients] = useState([])

    const ingredients_list_items = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))


    function addIngredient(form_data) {
        const new_ingredient = form_data.get("ingredient")
        setIngredients(prev_ingredients => [...prev_ingredients, new_ingredient])
        console.log(new_ingredient)
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
            <ul>
                {ingredients_list_items}
            </ul>
        </main>
    )
}