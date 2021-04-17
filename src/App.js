import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Components/Recipe';

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    console.log(process.env)
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.React_App_APP_ID}&app_key=${process.env.React_App_APP_KEY}`);
    const data = await res.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map( recipe => (
          <Recipe key={recipe.recipe.label} title={recipe.recipe.label} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>
        ))};
      </div>
    </div>
  );
}

export default App;
