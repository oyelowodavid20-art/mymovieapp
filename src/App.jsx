import Header from "./componet/Header";
import Searchbar from "./componet/Searchbar";
import Recipes from "./componet/Recipes";

function App() {
  return (
    <div className=" items-center ">
      <Header />
      <Searchbar />
      <Recipes/>
    </div>
  );
}

export default App;
