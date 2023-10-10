import { FaPause } from "react-icons/fa";
import { RotationItem } from "./RotationItem";
import { useRotationStore } from "../../store/useRotationStore";

export const RotationContainer = () => {
  const rotationList = useRotationStore(state => state.rotation);
  
  return (
    <div>
      <div className="flex justify-between p-2 bg-primary text-text">
        <div>Rotation</div>
        <button>
          <FaPause className="inline-block mr-2" />
          <span>Pause Rotation</span>
        </button>
      </div>
      <div className="py-2 px-4 bg-slate-300 min-h-[435px]">
      {rotationList.map((item, index) => (
            <RotationItem key={item.video.id.videoId} item={item} index={index} />
          ))}
      </div>
    </div>
  );
};
