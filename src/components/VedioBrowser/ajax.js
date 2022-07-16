import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 32,
    key: process.env.YOUTUBE_AIP_KEY,
  },
});
