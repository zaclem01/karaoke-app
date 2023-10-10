import { FunctionComponent } from "react";
import { FaPlus, FaPlay } from "react-icons/fa";
import { YoutubeItem } from "../../types";
import { useRotationStore } from "../../store/useRotationStore";

type SearchItemProps = {
  item: YoutubeItem;
};

export const SearchItem: FunctionComponent<SearchItemProps> = ({ item }) => {
  const addToRotation = useRotationStore((state) => state.add);

  return (
    <div className="flex gap-2 justify-between items-center mb-2 bg-secondary">
      <div className="shrink-0 basis-[120px]">
        <img
          src={item.snippet.thumbnails.medium.url}
          alt=""
          className="max-h-16"
        />
      </div>
      <div
        className="overflow-hidden whitespace-nowrap grow text-text text-ellipsis"
        title={item.snippet.title}
      >
        {item.snippet.title}
      </div>
      <div className="shrink-0 basis-[70px]">
        <button className="inline-block mx-2 text-text">
          <FaPlay />
        </button>
        <button
          className="inline-block mr-4 text-text"
          onClick={() => addToRotation("Zac", item)}
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};
