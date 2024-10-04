// useSearch.ts
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const useSearch = <T,>(data: T[]) => {
  const [search, setSearch] = useState<string>("");
  const [filteredData, setFilteredData] = useState<T[]>(data);
  const [debouncedValue] = useDebounce(search, 300);

  useEffect(() => {
    const lowercaseSearch = debouncedValue.toLowerCase();
    const filtered = data.filter(
      (item: any) =>
        item.name.toLowerCase().includes(lowercaseSearch) ||
        item.email.toLowerCase().includes(lowercaseSearch)
    );

    setFilteredData(filtered);
  }, [debouncedValue, data]);

  return { search, setSearch, filteredData };
};

export default useSearch;
