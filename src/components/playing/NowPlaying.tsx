import { forwardRef, useRef, useImperativeHandle } from "react";
import Youtube, { YouTubePlayer, YouTubeProps } from "react-youtube";
import { useRotationStore } from "../../store/useRotationStore";
import styles from "./youtube-embed.module.css";

export const NowPlaying = forwardRef(({}, ref) => {
  const player = useRef<YouTubePlayer | null>(ref);
  const video = useRotationStore((state) => state.nowPlaying);
  const setIsPlaying = useRotationStore((state) => state.setIsCurrentPlaying);

  useImperativeHandle(
    ref,
    () => ({
      play: () => {
        if (player.current) {
          console.log(player.current);
          player.current.playVideo();
        }
      },
      pause: () => {
        if (player.current) {
          player.current.pauseVideo();
        }
      },
      skipForward: () => {
        if (player.current) {
          player.current.seekTo(player.current.getCurrentTime() + 10, true);
        }
      },
      skipBack: () => {
        if (player.current) {
          player.current.seekTo(player.current.getCurrentTime() - 10, true);
        }
      }
    }),
    []
  );

  const handleOnReady: YouTubeProps["onReady"] = (e) => {
    player.current = e.target;
  };

  const handleOnPlay: YouTubeProps["onPlay"] = (e) => {
    setIsPlaying(true);
  };

  const handleOnPause: YouTubeProps["onPause"] = (e) => {
    setIsPlaying(false);
  };

  return (
    <div className="grow">
      <div className="p-2 bg-primary text-text">Now Playing</div>
      {video && (
        <Youtube
          ref={player}
          videoId={video.id.videoId}
          iframeClassName={styles.responsive}
          opts={{ playerVars: { autoplay: 1, controls: 0 } }}
          onReady={handleOnReady}
          onPlay={handleOnPlay}
          onPause={handleOnPause}
        />
      )}
    </div>
  );
});
