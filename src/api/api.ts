import axios from "axios";

const YOUTUBE_MEDIA_DOWNLOADER_BASE_URL = import.meta.env
  .VITE_APP_YOUTUBE_MEDIA_DOWNLOADER_API_BASE_URL;
const EXERCISE_DB_BASE_URL = import.meta.env.VITE_APP_EXERCISE_DB_API_BASE_URL;

const exerciseOptions = {
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const exerciseData = async () => {
  console.log(YOUTUBE_MEDIA_DOWNLOADER_BASE_URL);

  const response = await axios.get(
    `${EXERCISE_DB_BASE_URL}bodyPartList`,
    exerciseOptions
  );

  return response;
};

const youtubeOptions = {
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
