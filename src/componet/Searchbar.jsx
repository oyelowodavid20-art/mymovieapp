import { Search } from "lucide-react";
export default function Searchbar() {
  return (
    <div className="flex p-4 gap-2  items-center ">
        <input type="text" className="w-full border p-2 rounded bg-gray-300 outline-none"/>
       <button> <Search /> </button>
    </div> 
  );
}