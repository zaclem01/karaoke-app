export type YoutubeItem = {
  id: {
    kind: string;
    videoId: string;
    channelId: string;
    playlistId: string;
  };
  snippet: {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      [ThumnailKey in
        | "default"
        | "medium"
        | "high"
        | "standard"
        | "maxres"]: YoutubeThumbnail;
    };
    channelTitle: string;
    liveBroadcastContent: string;
  };
};

export type YoutubeThumbnail = {
  url: string;
  width: number;
  height: number;
};
