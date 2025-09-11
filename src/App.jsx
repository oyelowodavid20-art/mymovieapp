import { BrowserRouter, Route, Routes } from "react-router";
import Recipes from "./componet/Recipes";
import Header from "./Componet/Header";
import Searchbar from "./componet/Searchbar";
import RecipeDetail from "./Componet/RecipeDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
            <Recipes/>
            <Header/>
            <Searchbar/>
            </div>
          }
        />
        <Route path="/:id" element={<RecipeDetail />}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
