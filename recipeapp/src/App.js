import React, { useEffect, useState} from "react";
import './App.css';

const App = () => {

  const APP_ID = '';
  const APP_KEY = '';


  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = response.json();
    console.log(data.hits);
  }

  useEffect( () => {    
    getRecipes()
  }, [])

  return (
    <div className="App">
      <form className="search-form">
        <input className="searchbar" type="text"/>
        <button className="searchbtn" type="submit">Search</button>
      </form>
    </div>
  )
}

export default App;
