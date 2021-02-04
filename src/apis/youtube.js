import axios from 'axios';

const KEY = 'AIzaSyBakWSE_U87j9XUsOgBU5mENlmPIR2CSpE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResult: 5,
    key: KEY
  }
});