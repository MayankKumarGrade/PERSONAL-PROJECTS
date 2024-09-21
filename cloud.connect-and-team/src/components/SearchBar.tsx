import { SearchIcon } from "lucide-react";

const SearchBar = ({ className = "" }) => {
  return (
    <div className={`flex justify-between px-2 items-center border-slate-500 border rounded-lg ${className}`}>
      <input
        type="text"
        className="max-w-[80%] bg-transparent py-2 border-none outline-none"
        placeholder="Search..."
      />
      <button className="bg-transparent">
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBar;
