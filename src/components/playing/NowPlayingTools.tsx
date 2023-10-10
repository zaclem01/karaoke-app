import { FunctionComponent } from "react";
import { FaFastBackward, FaFastForward, FaPause, FaPlay } from "react-icons/fa";
import { useRotationStore } from "../../store/useRotationStore";

type NowPlayingToolsProps = {
  onTogglePlay: () => void;
  onSkip: (direction: number) => void;
};

export const NowPlayingTools: FunctionComponent<NowPlayingToolsProps> = ({
  onTogglePlay,
  onSkip,
}) => {
  const isPlaying = useRotationStore((state) => state.isCurrentPlaying);

  return (
    <div>
      <div className="p-2 bg-primary text-text">Player Controls</div>
      <div className="p-4 text-2xl bg-secondary text-text">
        <div className="flex gap-16 justify-between">
          <button>
            <FaFastBackward onClick={() => onSkip(-1)} />
          </button>
          <button onClick={() => onTogglePlay()}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button>
            <FaFastForward onClick={() => onSkip(1)} />
          </button>
        </div>
        <div className="mt-4">Volume Control Here</div>
      </div>
    </div>
  );
};
