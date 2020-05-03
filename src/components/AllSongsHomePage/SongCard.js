import React, {useState} from 'react';
import {useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import useStyles from './StyleContainerComponents/SongCardStyle'
import {Howl, Howler } from 'howler'
import ReactHowler from 'react-howler'
import {connect} from 'react-redux'
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';import StopIcon from '@material-ui/icons/Stop';
import Grid from '@material-ui/core/Grid';


 function SongCard({song, playingSong, songToPlay}) {

  const [play, setPlay] = useState(false)


  
  const classes = useStyles();
  const theme = useTheme();

  ////method  set the play song state to true or false to render the right icon and if true send the the redux state the link of the song else send empty string
  ////stopping  the song 
  const handelPlay = () =>{
    setPlay(!play)
    songToPlay(play? song.song_link : "")
   
  }




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
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            {playingSong === song.song_link? <StopIcon onClick={handelPlay } />  : <PlayArrowIcon  onClick={handelPlay } /> }
            
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon /> }
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

const mapDispatchToProps = dispatch => {
  return {
    songToPlay: link => dispatch({type: "PLAY_SONG", payload: {link: link}})
  }
}

const mapStateToProps = state => {
  return {
    playingSong: state.playingSong
  }
}



export default connect(mapStateToProps, mapDispatchToProps) (SongCard)