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
  const removeItem = useRotationStore(state => state.remove)
  
  return (
    <div className="flex gap-4 justify-between items-center mb-2">
      <div className="basis-1/4">{item.singer}</div>
      <div className="basis-1/2">{item.video.snippet.title}</div>
      <div className="text-right basis-1/4">
        <button className="inline-block mr-4 text-secondary">
          <FaPlay />
        </button>
        <button className="inline-block text-red-600" onClick={() => removeItem(index)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};
