export default function RecipeCard() {
  return (
    <div className="w-[80%] mx-auto shadow-2xl">
      <img
        src="./download.jpeg"
        alt="strawberry"
        className="w-full h-[300px] object-center object-fit"
      />
      <div className="p-6">
        <h2>Name:strawberrry</h2>
        <h2>Rating:2.5</h2>
      </div>
    </div>
  );
}
