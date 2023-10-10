import { create } from "zustand";
import { YoutubeItem } from "../types";

type RotationStore = {
  rotation: Rotation[];
  nowPlaying: YoutubeItem | null;
  isRotationPlaying: boolean;
  isCurrentPlaying: boolean;
  add: (singer: string, video: YoutubeItem) => void;
  remove: (index: number) => void;
  removeFromTop: () => void;
  setNowPlaying: (video: YoutubeItem) => void;
  setIsCurrentPlaying: (isPlaying: boolean) => void;
  shift: () => void;
};

export type Rotation = {
  singer: string;
  video: YoutubeItem;
};

export const useRotationStore = create<RotationStore>((set) => ({
  rotation: [],
  nowPlaying: null,
  isRotationPlaying: false,
  isCurrentPlaying: false,
  add: (singer, video) =>
    set((state) => ({ rotation: [...state.rotation, { singer, video }] })),
  remove: (index) =>
    set((state) => ({
      rotation: [
        ...state.rotation.slice(0, index),
        ...state.rotation.slice(index + 1),
      ],
    })),
  removeFromTop: () =>
    set((state) => ({ rotation: [...state.rotation.slice(1)] })),
  setNowPlaying: (video) => set(() => ({ nowPlaying: video })),
  setIsCurrentPlaying: (isPlaying) =>
    set(() => ({ isCurrentPlaying: isPlaying })),
  shift: () => {}, // TODO: Add later
}));
