
import './App.css';
import { Ingredients } from './Components/Ingredients';
import { Instructions } from './Components/Instructions';
import { LeaveAReview } from './Components/LeaveAReview';
import { NutritionalFacts } from './Components/NutritionalFacts';
import { ReviewHighlights } from './Components/ReviewHighlights';
import { ReviewList } from './Components/ReviewList';
import { Time } from './Components/Time';
import { NavBar } from './Components/NavBar';


function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <h1 style={{ marginTop: "0" }}>LET HIM COOKBOOK!</h1>
      <p>NOT the annoying life store section</p>
      <h2>Recipe Name</h2>
      <p>Recipe Author</p>
      <ReviewHighlights />
      <Time />
      <NutritionalFacts />
      <Ingredients />
      <Instructions />
      <LeaveAReview />
      <ReviewList />
    </div>
    
  );
}

export default App;
