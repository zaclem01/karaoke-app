import axios from 'axios';

const KEY = 'AIzaSyC1tEoWBY_UAJ2qpip8sIE5JQrukoklB98';

export const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        channelId: 'UCwTRjvjVge51X-ILJ4i22ew',
        maxResults: 5,
        key: KEY,
    }
})