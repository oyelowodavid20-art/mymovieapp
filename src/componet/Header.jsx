export default function Header() {
  return (
    <h2 className="flex justify-between p-6 shadow-md font-bold text-xl items-center  fixed top-0 w-full  fill-white bg-white">
      Food
      <button className="flex flex-col gap-1">
        <span className="bg-black w-4 h-1 inline-block"></span>
        <span className="bg-black w-4 h-1 inline-block"></span>
        <span className="bg-black w-4 h-1 inline-block"></span>
      </button>
    </h2>
  );
}
