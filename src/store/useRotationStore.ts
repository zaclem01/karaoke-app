import { create } from "zustand";
import { YoutubeItem } from "../types";

type RotationStore = {
  rotation: Rotation[];
  add: (singer: string, video: YoutubeItem) => void;
  remove: (index: number) => void;
};

type Rotation = {
  singer: string;
  video: YoutubeItem;
};

export const useRotationStore = create<RotationStore>((set) => ({
  rotation: [],
  add: (singer: string, video: YoutubeItem) =>
    set((state) => ({ rotation: [...state.rotation, { singer, video }] })),
  remove: (index: number) =>
    set((state) => ({
      rotation: [
        ...state.rotation.slice(0, index),
        ...state.rotation.slice(index + 1),
      ],
    })),
  shift: () => {}, // TODO: Add later
}));
