import React, { useState } from "react";
import Ingredient from "./Ingredient"; //importing component
import "./Recipe.css";
// import Axios from 'axios';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';//importing like icon from material-ui

import FormControlLabel from '@material-ui/core/FormControlLabel'; //importing material ui component
import Checkbox from '@material-ui/core/Checkbox';
// import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';




const Recipe = (recipe) => {
	const { strMeal, strMealThumb, strCategory, strArea, strInstructions, strSource } =
		recipe.recipe;


	console.log(recipe);

	let ingredientsKeyNames = [];
	let quantityKeyNames = [];

	for (let a = 1; a <= 20; ++a) {
		ingredientsKeyNames[a - 1] = `strIngredient${a}`;
		quantityKeyNames[a - 1] = `strMeasure${a}`;
	}


	return (
		<div className="recipe-container">
			<div className="header-area">
				{/* making use of material ui components in header  */}
				<h1><a href={strSource} target="_blank" rel="noopenernoreferred">{strMeal}<span className="like">
					<FormControlLabel
						control={<Checkbox icon={<FavoriteBorderOutlinedIcon fontSize="large" />}
							checkedIcon={<FavoriteBorder fontSize="large" />}
							name="checkedH" />}
					// control class of FormControlLabel will help in toggling of like button
					/>
				</span></a></h1>
			</div>
			<img src={strMealThumb} alt={strMealThumb} />
			<div className="category-area">
				<h3><br /><em> &nbsp;&nbsp;&nbsp; Category of meal:</em> {strCategory}
					<br /> <em>Area of the meal:</em> {strArea}</h3>
			</div>
				{/* ingredients portion ->>  */}
			<h3 className="Ingredients-head">Ingredients</h3>
			<div className="Ingredients-content">
				<Ingredient
					recipe={recipe}
					ingredientsKeyNames={ingredientsKeyNames}
					quantityKeyNames={quantityKeyNames}
				/></div>
			<h3 className="recipe-head"><em>Recipes</em> </h3>
			<div className="instructions-content">
				<h3>{strInstructions}</h3>
				{/* the various classes used above are defined in Recipe.css file  */}
			</div>
		</div>
	);
};
export default Recipe;













// class foodie extends React.Component {
// 	constructor(props) {
// 	  super(props);
// 	  this.state = {
// 		brand: "nestle",
// 		model: "maggie",


// 	  };
// 	}
// 	render() {
// 	  return (
// 		<div>
// 		  <h1>My {this.state.brand}</h1>
// 		  <p>

// 			{this.state.model}

// 		  </p>
// 		</div>
// 	  );
// 	}
//   }