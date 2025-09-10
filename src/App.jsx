import Card from "./componet/Card";
import Header from "./componet/Header";
import Searchbar from "./componet/Searchbar";
function App() {
  return (
    <div className="border-2 w-72 h-72 items-center m-10">
      <Header />
      <Searchbar />
      <Card />
    </div>
  );
}

export default App;
