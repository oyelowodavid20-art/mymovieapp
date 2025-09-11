import { Search } from "lucide-react";
export default function Searchbar() {
  return (
    <div className="flex p-5 items-center gap-6 ">
        <input type="text" className="w-full border p-2 rounded bg-gray-300 my-16 outline-none"/>
        <Search />
    </div> 
  );
}