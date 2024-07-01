
import './App.css';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">

              <nav>
               
                <ul>
                    {/* <li><Link className='link' to="/">Home</Link></li>
                    <li><Link className='link' to="/recipes">Recipes</Link></li>
                    <li><Link className='link' to="/tree">Equipment</Link></li>
                    <li><Link className='link' to="/search">About</Link></li> */}
                </ul>
            </nav>

      <h1>LET HIM COOKBOOK!</h1>
      <p>NOT the annoying life store section</p>
      <h2>Recipe Name</h2>
      <p>Recipe Author</p>
      <div>
        <p>***** 4.9</p>
        <p>reviews</p>
        <p>photos</p>
      </div>
      <div>
        <p>Total Time</p>
        <p>Additional Time</p>
        <p>Prep Time</p>
        <p>cook Time</p>
        <p>Servings</p>
      </div>
      <h3>Ingredients List</h3>
      
      <ul>
        <li>stuff</li>
        <li>more stuff</li>
        <li>spicy stuff</li>
        <li>sweet stuff</li>
      </ul>
      <h3>Cooking Instructions</h3>
      <ol>
        <li>get the stuff</li>
        <li>prep the stuff</li>
        <li>cook the stuff</li>
        <li>serve the stuff</li>
      </ol>

    <h3>Nutritional Facts</h3>
      <ul>
        <li>Calories</li>
        <li>Protein</li>
        <li>Carbs</li>
        <li>Fats</li>
      </ul>

      <h3>Leave a review</h3>

    <h3>Read the reviews</h3>
      <ul>
        <li></li>
      </ul>
    </div>
  );
}

export default App;
