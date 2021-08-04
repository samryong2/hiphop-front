import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import axios from 'axios';
import Youtube from './service/youtube';

const httpClient =axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params:{key:process.env.REACT_APP_YOUTUBE_API_KEY},
});

// https://content-youtube.googleapis.com/youtube/v3/playlistItems?playlistId=PLr8w4FCviQu09tg2mHjTP0FYEobSXF7X9&part=snippet&maxResults=5&key=AIzaSyAa8yy0GdcGPHdtD083HiGGx_S0vMPScDM
  
const youtube = new Youtube(httpClient);

ReactDOM.render(
  <React.StrictMode>
    <App
      youtube={youtube}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

