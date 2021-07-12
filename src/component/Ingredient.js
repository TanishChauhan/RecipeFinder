import React from "react";
import { stringify } from "uuid";

// this component will help to print the ingredients of the dish accordingly
const Ingredient = ({ recipe, ingredientsKeyNames, quantityKeyNames }) => {
	const ListOfItems = () => {
		const firstItems = [];

		for (let a = 1; a <= 20; ++a) {
			let sliceString = JSON.stringify(
				recipe.recipe[`${ingredientsKeyNames[a - 1]}`]
			);
			// stringify is used to convert json into jsx code 
			// $ symbol is used to refer to the value dynamically
			//  (``) this particular sign is used to signify string 
			sliceString = sliceString.substr(1, sliceString.length - 2);
			const measure = JSON.stringify(
				recipe.recipe[`${quantityKeyNames[a - 1]}`]
			);
			console.log(typeof sliceString, sliceString);
			{
				sliceString.length !== 0 &&
					sliceString !== "ul" &&
					firstItems.push(
						<li>
							{sliceString} --- {measure}
						</li>
					);
			}
		}
		return firstItems;
	};

	return <ul >{ListOfItems()}</ul>;
};

export default Ingredient;









// class dish extends React.Component {
// 	render() {
// 	  return <h2>I am a {this.props.brand}!</h2>;
// 	}
//   }

//   class dishs extends React.Component {
// 	render() {
// 	  const carname = "Ford";
// 	  return (
// 		<div>
// 		<h1>Who lives in my garage?</h1>
// 		<dish  brand={carname} />
// 		</div>
// 	  );
// 	}
//   }

//   ReactDOM.render(<dishs />, document.getElementById('root'));
