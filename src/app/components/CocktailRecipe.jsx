import React from 'react';

const CocktailRecipe = (props) => {

  const ingredientsList = [];
  for (let i = 1; i <= 15; i++) {
    if (props.recipe['strIngredient' + i]) {
      const ingredient = <li key={i}>{`${props.recipe['strIngredient' + i]} (${props.recipe['strMeasure' + i]})`}</li>;
      ingredientsList.push(ingredient);
    }
  }

  return (
      <div className='row recipes-list_element'>        
        <div className='recipes-list_main'>
          <h4>{ props.recipe.strDrink } </h4>
          <p>Category: { props.recipe.strCategory }</p>
          <p>Type: { props.recipe.strAlcoholic }</p>
          <div className='recipes-list_image'>
            <img src={ props.recipe.strDrinkThumb } alt='cocktail image small' onClick={ () => props.showFullImage(props.recipe.strDrinkThumb, props.recipe) }></img>
          </div>
        </div>
      </div>
      
  );
};

module.exports = CocktailRecipe;
