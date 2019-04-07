import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "Thriller", duration: "2:45" },
    { title: "Like a Prayer", duration: "3:13" },
    { title: "Rolling in the Deep", duration: "3:34" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
});
