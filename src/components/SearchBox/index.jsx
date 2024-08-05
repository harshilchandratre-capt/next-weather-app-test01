const SearchBox = ({ value, onChange }) => {
  return (
    <div className="h-max w-max text-center flex items-center ">
        <input
          className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-[black]"
          placeholder="Enter City Name..."
          type="text"
          value={value}
          onChange={onChange} />
    </div>
  );
};
export default SearchBox;
