import React, { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import useStyles from "../AllSongsHomePage/StyleContainerComponents/SongCardStyle";
import { connect } from "react-redux";
import StopIcon from "@material-ui/icons/Stop";

function SearchSongCard({ song, playingSong, songToPlay }) {
  const [play, setPlay] = useState(false);

  const classes = useStyles();
  const theme = useTheme();

  ////method  set the play song state to true or false to render the right icon and if true send the the redux state the link of the song else send empty string
  ////stopping  the song
  const handelPlay = () => {
    setPlay(!play);
    songToPlay(play ? song.preview : "");
  };

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="p" variant="p">
            {song.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {song.artist.name}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="previous">
            {theme.direction === "rtl" ? (
              <SkipNextIcon />
            ) : (
              <SkipPreviousIcon />
            )}
          </IconButton>
          <IconButton aria-label="play/pause">
            {playingSong === song.preview ? (
              <StopIcon onClick={handelPlay} />
            ) : (
              <PlayArrowIcon onClick={handelPlay} />
            )}
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === "rtl" ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton>
        </div>
      </div>

      <CardMedia
        className={classes.cover}
        image={song.album.cover}
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
    playingSong: state.playingSong
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchSongCard);
