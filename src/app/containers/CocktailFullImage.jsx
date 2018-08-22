import React from 'react';
import { hideImage } from '../actions/fullImageActions';
import { connect } from "react-redux";

export class CocktailFullImage extends React.Component {

  handleOnClickClose = event => {
    event.preventDefault();
      this.props.hideImage();
  }

  render() {

    if(!this.props.url) {
      return null
    } else {

      const ingredientsList = [];
      for (let i = 1; i <= 15; i++) {
         if (this.props.details['strIngredient' + i]) {
          //  consloe.log(this.props.details['strIngredient' + i])
           const ingredient = <li key={i}>{`${this.props.details['strIngredient' + i]} (${this.props.details['strMeasure' + i]})`}</li>;
          //  consloe.log(ingredient)
          ingredientsList.push(ingredient);
         }
      }

      return (
        <div className='fullScreen' onClick={ this.handleOnClickClose }>
          <div ><img src={ this.props.url } alt='cocktail image big' onClick={ event => event.stopPropagation()}></img></div>
          <div className='recipes-list_ingredients_detail'>
            <ul>{ ingredientsList }</ul>
            <p className='recipes-list_ingredients_heading_detail'>Instructions</p>
            <p className='recipes-list_ingredients_instructions_detail'>{ this.props.details.strInstructions }</p>
          </div>
          <button type='button' className='fullScreen-button_close' onClick={ this.handleOnClickClose }>CLOSE</button>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    url: state.fullImageReducer.url,
    details: state.fullImageReducer.details
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      hideImage: () => {
          dispatch(hideImage());
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CocktailFullImage);
