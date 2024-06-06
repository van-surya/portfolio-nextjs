// utils/youtubeApi.js
import axios from 'axios';

export const fetchYoutubeVideos = async () => {
    const apiKey = process.env.YOUTUBE_API_KEY;
    const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
        params: {
            key: '',
            part: 'snippet',
            channelId: '',
            maxResults: 10,
            order: 'date',
        },
    });
    return response.data.items;
};
