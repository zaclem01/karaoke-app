import React, { FunctionComponent } from "react";

type SearchBarProps = {
  term: string;
  onChange: (term: string) => void;
  onSearch: () => void;
};

export const SearchBar: FunctionComponent<SearchBarProps> = ({
  term,
  onChange,
  onSearch,
}) => {
  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="flex justify-between">
      <input
        type="text"
        className="px-4 w-full border-2 border-secondary"
        value={term}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        onKeyUp={handleKeyUp}
      />
      <button
        className="px-4 py-2 ml-4 border-2 bg-secondary text-text border-secondary"
        onClick={onSearch}
      >
        Search
      </button>
    </div>
  );
};
