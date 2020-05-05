import React from "react";
import CreatePlaylist from "./StyleComponent/CreatePlaylist";
import PlaylistsStyle from "./StyleComponent/PlaylistsStyle";
import API from "../../../src/API";
import PlaylistShow from './PlaylistShow'
import { BrowserRouter as Router, Route, Link} from "react-router-dom";


export default class Playlist extends React.Component {
	constructor() {
		super();
		this.state = {
			playlist: "",
			playlistData: [],
		};
	}

	componentDidMount() {
		API.getPlaylists(localStorage.token).then((json) =>
			this.setState({
				playlistData: json,
			})
		);
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		API.createPlaylist(
			{
				playlist: { name: this.state.playlist },
			},
			localStorage.token
		).then((playlist) =>
			this.setState({
				playlistData: [...this.state.playlistData, playlist]
			})
		);
	};

	removePlaylist = (id) => {
		API.deletePlaylist(id)
		this.setState({
			playlistData: this.state.playlistData.filter(playlist => playlist.id !== id)
		})
	}

	
	render() {
		return (
			<div>
				<CreatePlaylist
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
				/>
				
				<PlaylistsStyle playlistData={this.state.playlistData} removePlaylist={this.removePlaylist}  />
			</div>
		
		
		);
	}
}
