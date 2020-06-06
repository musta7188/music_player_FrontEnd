const baseURL = "https://music-player-backend.herokuapp.com/";
const logInURL = `${baseURL}log-in`;
const validateURL = `${baseURL}validate`;
const createUserURL = `${baseURL}users`;
const createPlaylistURL = `${baseURL}playlists`;
const allSongUrl = `${baseURL}songs`;
const createPlayListSongLink = `${baseURL}playlist_songs`;
const DEEZER_URL = "https://deezerdevs-deezer.p.rapidapi.com/search/track?q=";
const DEEZER_API_KEY = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": "178f0cd1fbmsh29f81f40b999084p1211d1jsneb0d0e6e0aaf",
  },
};

const post = (url, data, token) => {
  const configObject = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      AUTHORIZATION: token,
    },
    body: JSON.stringify(data),
  };
  return fetch(url, configObject);
};

const createSong = (data) => {
  return post(allSongUrl, data).then((resp) => resp.json());
};

export const searchSong = (value) => {
  return fetch(`${DEEZER_URL}${value}`, DEEZER_API_KEY).then((resp) =>
    resp.json()
  );
};

const createPlayListSong = (data) => {
  return post(createPlayListSongLink, data).then((resp) => resp.json());
};

const get = (url, token) => {
  return token ? fetch(url, { headers: { AUTHORIZATION: token } }) : fetch(url);
};

const validate = (token) => {
  return get(validateURL, token).then((response) => response.json());
};

const logIn = (data) => {
  return post(logInURL, data).then((response) => response.json());
};

const signUp = (data) => {
  return post(createUserURL, data).then((response) => response.json());
};

const createPlaylist = (data, token) => {
  return post(createPlaylistURL, data, token).then((response) =>
    response.json()
  );
};

const getPlaylists = (token) => {
  return get(createPlaylistURL, token).then((response) => response.json());
};

const deletePlaylist = (id) => {
  fetch(`${createPlaylistURL}/${id}`, { method: "DELETE" });
};

export const deleteSong = (id) => {
  return fetch(`${allSongUrl}/${id}`, { method: "DELETE" }).then((resp) =>
    resp.json()
  );
};

const getSelectedPlaylist = (id) => {
  return fetch(`${baseURL}/playlists/${id}`).then((resp) => resp.json());
};

export const AllSongs = () => {
  return fetch(allSongUrl).then((resp) => resp.json());
};

export default {
  logIn,
  validate,
  signUp,
  createPlaylist,
  getPlaylists,
  deletePlaylist,
  createSong,
  createPlayListSong,
  getSelectedPlaylist,
  deleteSong,
};
