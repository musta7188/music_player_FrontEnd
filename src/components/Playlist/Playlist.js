import React from "react";
import CreatePlaylist from "./StyleComponent/CreatePlaylist";
import PlaylistsStyle from "./StyleComponent/PlaylistsStyle";
import API from "../../../src/API";
import {connect}  from 'react-redux'



class Playlist extends React.Component {
	constructor() {
		super();
		this.state = {
			playlist: "",
			playlistData: [],
		};
	}

	componentDidMount() {
	this.setState({
		playlistData: this.props.AllPlayList
	})
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
		
		this.props.updatePlaylist(playlist)

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
				
				<PlaylistsStyle playlistData={this.props.AllPlayList} removePlaylist={this.removePlaylist}  />
			</div>
		
		
		);
	}
}

const mapStateToProps = state => {
  return {
    AllPlayList: state.playList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
		 updatePlaylist: (playlist) => dispatch({ type: "ADD_PLAYLIST", payload: { playlist: playlist } })

  };
};


export default connect(mapStateToProps, mapDispatchToProps) (Playlist)
