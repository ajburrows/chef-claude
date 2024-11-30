import { useState } from "react"

export default function Main(){
    const [ingredients, setIngredients]= useState([])


    function handleSubmit(event) {
        event.preventDefault()
        const form_data = new FormData(event.currentTarget)
        const new_ingredient = form_data.get("ingredient")
        setIngredients(prev_ingredients_list => {
            return [...prev_ingredients_list, <li key={new_ingredient}>{new_ingredient}</li>]
        })
        console.log(ingredients)
    }

    return(
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredients}
            </ul>
        </main>
    )
}