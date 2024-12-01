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
            {ingredients.length ? 
                <section className="ingredient-section">
                    <h2 className="ingredient-list-title">Ingredients on hand:</h2>
                    <ul className="ingredients-list" aria-live="polite">{ingredients_list_items}</ul>
                    {ingredients.length > 3 ?
                        <div className="get-recipe-container">
                            <div>
                                <h2>Ready for a recipe?</h2>
                                <p>Generate a recipe from your list of ingredients.</p>
                            </div>
                            <button>Get a recipe</button>
                        </div>
                        : null
                    }
                </section>
                : null
            }
        </main>
    )
}