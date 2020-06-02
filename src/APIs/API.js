const baseURL = "https://music-player-backend.herokuapp.com/";
const logInURL = `${baseURL}log-in`;
const validateURL = `${baseURL}validate`;
const createUserURL = `${baseURL}users`;
const createPlaylistURL = `${baseURL}playlists`;
const createSongUrl = `${baseURL}songs`
const createPlayListSongLink = `${baseURL}playlist_songs`


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
return post(createSongUrl, data).then(resp => resp.json())
}





const createPlayListSong = (data) =>{
	return post(createPlayListSongLink, data).then(resp => resp.json())
}

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

  fetch(`${createPlaylistURL}/${id}`, { method: "DELETE"})
};


const getSelectedPlaylist = (id) => {
	return fetch(`${baseURL}/playlists/${id}`)
	 .then(resp => resp.json())
	 
 
 }



export default {
	logIn,
	validate,
	signUp,
	createPlaylist,
  getPlaylists,
	deletePlaylist,
	createSong,
	createPlayListSong,
	getSelectedPlaylist

};
