import React, { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import useStyles from "./StyleContainerComponents/SongCardStyle";
import { connect } from "react-redux";
import StopIcon from "@material-ui/icons/Stop";
import AddSongModal2 from './Modal/AddSongModal2'
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";


function SongCard({ song, playingSong, songToPlay }) {
  const [play, setPlay] = useState(false);
  const [like, setLike] = useState(false);

  const classes = useStyles();
  const theme = useTheme();

  ////method  set the play song state to true or false to render the right icon and if true send the the redux state the link of the song else send empty string
  ////stopping  the song
  const handelPlay = () => {
    setPlay(!play);
    songToPlay(play ? song.song_link : "");
  };

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="p" variant="p">
            {song.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {song.artist}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="add song to playlist">
            <AddSongModal2 song={song}/>
          </IconButton>
          <IconButton aria-label="play/pause">
            {playingSong === song.song_link ? (
              <StopIcon onClick={handelPlay} />
            ) : (
              <PlayArrowIcon onClick={handelPlay} />
            )}
          </IconButton>
          <IconButton aria-label="like">
          <div onClick={() => setLike(!like)}>
            {like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </div>
          </IconButton>
        </div>
      </div>

      <CardMedia
        className={classes.cover}
        image={song.album_img}
        title="Live from space album cover"
      />
    </Card>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    songToPlay: (link) =>
      dispatch({ type: "PLAY_SONG", payload: { link: link } }),
  };
};

const mapStateToProps = (state) => {
  return {
    playingSong: state.playingSong,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongCard);
