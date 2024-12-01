export default function IngredientsList(props){

    const ingredients_list_items = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    return(
        props.ingredients.length > 0 ? 
            <section className="ingredient-section">
                <h2 className="ingredient-list-title">Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredients_list_items}</ul>
                {props.ingredients.length > 3 ?
                    <div className="get-recipe-container">
                        <div ref={props.ref}>
                            <h2>Ready for a recipe?</h2>
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button onClick={props.getRecipe}>Get a recipe</button>
                    </div>
                    : null
                }
            </section>
        : null
    )
}