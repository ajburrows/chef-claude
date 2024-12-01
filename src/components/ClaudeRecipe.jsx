import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function ClaudeRecipe(props){
    return(
        props.recipeMarkdown ? 
            <section className='suggested-recipe-container' aria-live='polite'>
                <h2>Chef Claude Recommends</h2>
                <ReactMarkdown>{props.recipeMarkdown}</ReactMarkdown>
            </section>
            : null
    )
}