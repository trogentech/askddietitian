import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  return (
    <div className="flex items-center md:w-3/5  rounded-lg bg-white  mt-4 md:mt-8">
      <div className="flex justify-between w-full  rounded overflow-hidden py-1 px-3 shadow-md">
        <input
          type="text"
          placeholder="Search for a nutritional topic..."
          className="flex-grow placeholder:text-xs md:placeholder:text-base px-4 text-black placeholder-black py-2 focus:outline-none"
        />
        <button className="bg-primary hover:cursor-pointer rounded-lg text-white px-4">
         <FiSearch size={20}/>
        </button>
      </div>
    </div>
  );
}
