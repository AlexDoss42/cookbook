
import './App.css';
import { Ingredients } from './Components/Ingredients';
import { Instructions } from './Components/Instructions';
import { LeaveAReview } from './Components/LeaveAReview';
import { NutritionalFacts } from './Components/NutritionalFacts';
import { ReviewHighlights } from './Components/ReviewHighlights';
import { ReviewList } from './Components/ReviewList';
import { Time } from './Components/Time';
// import { NavBar } from './Components/NavBar';
import data from './data.json';


function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <h1 style={{ marginTop: "0" }}>LET HIM COOKBOOK!</h1>
      <p>NOT the annoying life store section</p>
      <h2>{data.recipe_name}</h2>
      <p>{data.author}</p>
      <ReviewHighlights />
      <Time timeData={data.time}/>
      <NutritionalFacts nutritionalFacts={ data.nutritional_facts } servings={data.servings} />
      <Ingredients Ingredients={ data.ingedients }/>
      <Instructions Instructions={ data.instructions }/>
      <LeaveAReview />
      <ReviewList />
    </div>
    
  );
}

export default App;
