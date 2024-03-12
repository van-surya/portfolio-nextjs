// utils/youtubeApi.js
import axios from 'axios';

export const fetchYoutubeVideos = async () => {
    const apiKey = process.env.YOUTUBE_API_KEY;
    const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
        params: {
            key: 'AIzaSyAxTaJJvtz2U3XkmBbxbhxM7OhfJ1JwK9g',
            part: 'snippet',
            channelId: 'UCy5DLwoFzxEIhB6sbEG1F9g',
            maxResults: 10,
            order: 'date',
        },
    });
    return response.data.items;
};
