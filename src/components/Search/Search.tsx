import React, { useEffect } from "react";
import { Input } from "../ui/input";

const Search = ({ onSearch }: { onSearch: (value: string) => void }) => {
  return (
    <>
      <Input
        placeholder="Search"
        onChange={(e) => onSearch(e.target.value)}
        className="px-4 w-full md:w-60 outline-none"
      />
    </>
  );
};

export default Search;
