import { FunctionComponent, useState } from "react";
import { YoutubeItem } from "../../types";
import { SearchBar } from "./SearchBar";
import { SearchItem } from "./SearchItem";
import { youtube } from "../../utils/api";

export const SearchContainer: FunctionComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchList, setSearchList] = useState<YoutubeItem[]>([]);

  const handleChange = (term: string) => {
    setSearchTerm(term);
  };

  const handleSearch = () => {
    youtube
      .get("/search", {
        params: {
          q: searchTerm,
        },
      })
      .then((response) => {
        setSearchList(response.data.items);
      });
  };

  return (
    <div>
      <SearchBar
        term={searchTerm}
        onChange={handleChange}
        onSearch={handleSearch}
      />
      <div className="mt-4">
        <div className="p-2 bg-primary text-text">Search Results</div>
        <div className="p-2 bg-slate-300 h-[376px]">
          {searchList.map((item) => (
            <SearchItem key={item.id.videoId} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
