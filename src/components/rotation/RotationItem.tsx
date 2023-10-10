import { FunctionComponent } from "react";
import { FaPlay, FaTrash } from "react-icons/fa";
import { Rotation, useRotationStore } from "../../store/useRotationStore";

type RotationItemProps = {
  index: number;
  item: Rotation;
};

export const RotationItem: FunctionComponent<RotationItemProps> = ({
  index,
  item,
}) => {
  const removeItem = useRotationStore((state) => state.remove);
  const setNowPlaying = useRotationStore((state) => state.setNowPlaying);

  return (
    <div className="flex gap-4 justify-between items-center mb-2">
      <div className="shrink-0 basis-[70px]">{item.singer}</div>
      <div className="overflow-hidden whitespace-nowrap grow text-ellipsis" title={item.video.snippet.title}>{item.video.snippet.title}</div>
      <div className="text-right shrink-0 basis-[70px]">
        <button
          className="inline-block mr-4 text-secondary"
          onClick={() => {
            setNowPlaying(item.video);
          }}
        >
          <FaPlay />
        </button>
        <button
          className="inline-block text-red-600"
          onClick={() => removeItem(index)}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};
