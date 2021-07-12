import React, { useState } from 'react';
import './App.css'; // importing style file
import Recipe from './component/Recipe'; //importing component
import Axios from 'axios'; //this is a built library which is used to fetch data from external sources
import { v4 as uuidv4 } from 'uuid'; //key



//using functional components, react hooks
function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);




  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
  // this is the given url of api 

  const DataFetch = async () => {
    try {
      const result = await Axios.get(URL);
      //  using async and await to retrieve promises
      setRecipes(result.data.meals)

      console.log(result.data);
      setQuery("");
    } catch (error) {
      console.error();

    }
    // it is always good to handle exceptions, thus using try and catch 


  };
  // handling events 
  const onSubmit = (e) => {
    e.preventDefault();
    DataFetch();
  }
  const onChange = (e) => {
    setQuery(e.target.value);
  }

  return (
    <div className="Heading">
      <style>{'body { background-color: rgb(173, 230, 227); }'}</style>
      <form onSubmit={onSubmit}>
        <div className="Header">
          <h1 >Recipe Finder</h1> <br /></div>
          {/* making the search engine ->> */}
        <input type="text" placeholder="Enter the name of Dish " autoComplete="off" onChange={onChange} value={query} />

        <input type="submit" value="Get Recipe" />


      </form>
      <h2>{recipes !== null ? "Type a Dish Name to Search for its Ingredients" : "No Data Has been received"}</h2>
      {/* above statement is  conditional based , which will work on successful api data retrieval  */}
      <div className="recipes">
        {recipes !== null && recipes?.map(recipe => <Recipe key={uuidv4} recipe={recipe} />)}
        {/* map function helps to iterate over data in the api  */}
      </div>
    </div>

  );

}

export default App;











// class Food extends React.Component {
//   constructor(props) {
//     super(props)
//     this.shoot = this.shoot.bind(this)
//   }
//   shoot() {
//     alert(this);

//     Thanks to the binding in the constructor function,
//     the 'this' keyword now refers to the component object

//   }
//   render() {
//     return (
//       <button onClick={this.shoot}>Take the shot!</button>
//     );
//   }
// }

// ReactDOM.render(<Food />, document.getElementById('root'));