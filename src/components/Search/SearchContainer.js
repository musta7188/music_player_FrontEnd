import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import SearchSongCard from "./SearchSongCard";
import useStyles from "../AllSongsHomePage/StyleContainerComponents/SongContainerStyle";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

function SearchContainer({ songs }) {

  const songPerPage = 6;

  const [limit, setLimit] = useState(songPerPage);
  const [startLimit, setStartLimit] = useState(0);

  const classes = useStyles();

  const handleNext = (value) => {
    if (value === "more") {
      setLimit(limit + songPerPage);
      setStartLimit(startLimit + songPerPage);
    } else {
      setLimit(limit <= songPerPage ? limit : limit - songPerPage);
      setStartLimit(startLimit <= 0 ? startLimit : startLimit - songPerPage);
    }
  };

  return (
    <div>
      {songs ? (
        <Grid container className={classes.root} spacing={3}>
          <Grid item xs={15}>
            <Grid container justify="center" spacing={4}>
              {songs.slice(startLimit, limit).map((song) => (
                <Grid key={song.id} item>
                  <SearchSongCard song={song} />
                </Grid>
              ))}
            </Grid>
            <br></br>
            <div>
              <ButtonGroup
                color="secondary"
                aria-label="outlined secondary button group"
              >
                <Button onClick={() => handleNext("less")}>Back</Button>
                { limit <= songs.length && <Button onClick={() => handleNext("more")}>Next</Button>}
              </ButtonGroup>
            </div>
          </Grid>
        </Grid>
      ) : (
        <h1>Search For a Song</h1>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    songs: state.selectedSongs,
  };
};

export default connect(mapStateToProps)(SearchContainer);
