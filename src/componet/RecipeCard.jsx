export default function RecipeCard({ data }) {
  console.log(data);

  return (
    <div className="w-[90%] mx-auto shadow-2sm rounded-xl overflow-hidden">
      <img
        src={data.image}
        alt=""
        className="w-full h-[300px] object-center object-cover"
      />
      <div className="p-6 ">
        <h2 className="font-semibold text-2xl mb-2">{data.name}</h2>
        <h2 className="border w-fit px-2 py-0.5 bg-red-400">{data.rating}</h2>
        <h2 >{data.cusine}</h2>
        <h2 >{data.difficulty}</h2>
        <h2 >{data.reviewCount}</h2>
      </div>
    </div>
  );
}
