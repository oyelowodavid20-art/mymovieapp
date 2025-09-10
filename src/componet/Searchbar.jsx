import { Search } from "lucide-react";
export default function Searchbar() {
  return (
    <div className="flex p-4 gap-2  mb-4  ">
        <input type="text" className="w-full border p-2 rounded bg-gray-300"/>
        <Search />
    </div> 
  );
}