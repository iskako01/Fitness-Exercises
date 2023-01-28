import axios from "axios";

const YOUTUBE_MEDIA_DOWNLOADER_BASE_URL =
  process.env.REACT_APP_YOUTUBE_MEDIA_DOWNLOADER_API_BASE_URL;
const EXERCISE_DB_BASE_URL = process.env.REACT_APP_EXERCISE_DB_API_BASE_URL;

const exerciseOptions = {
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

const youtubeOptions = {
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
