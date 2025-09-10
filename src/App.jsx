import Header from "./componet/Header";
import Searchbar from "./componet/Searchbar";
import RecipeCard from "./componet/RecipeCard";
function App() {
  return (
    <div className=" items-center ">
      <Header />
      <Searchbar />
      <RecipeCard />
    </div>
  );
}

export default App;
