import { Link } from "react-router";

export default function RecipeCard({ data }) {
  console.log(data);

  return (
    <div className="w-[90%] mx-auto shadow-2sm rounded-xl overflow-hidden">
      <img
        src={data.image}
        alt=""
        className="w-full h-[300px] object-center object-cover"
      />
      <p className="font-light">{data.cuisine}</p>
      <div className="p-6 ">
        <h1 className="font-semibold text-2xl mb-2 ">{data.name}</h1>
        <p>This is the difficulty of the food above:{data.difficulty}</p>
        <p>people who haved reveiwed this meal:{data.reviewCount}</p>
      </div>
       <p className="border w-fit px-2 py-0.5 bg-red-400 mx-[86%]">{data.rating}</p>
       <Link to={`/${data.id}`} >more</Link>
    </div>
  );
}
