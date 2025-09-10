export default function RecipeCard() {
  return (
    <div className="w-[80%] mx-auto shadow-2xl rounded-xl overflow-hidden">
      <img
        src="./download.jpeg"
        alt="strawberry"
        className="w-full h-[300px] object-center object-cover"
      />
      <div className="p-6 r">
        <h2>Name:strawberrry</h2>
        <h2>Rating:2.5</h2>
      </div>
    </div>
  );
}
