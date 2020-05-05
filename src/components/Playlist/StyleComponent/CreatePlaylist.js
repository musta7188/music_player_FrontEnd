import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles((theme) => ({
    root: {
        height: "10vh",
    },
}))


export default function CreatePlaylist({handleChange, handleSubmit}) {
    const classes = useStyles();
    


return(
<form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
  
  <TextField onChange={handleChange} name="playlist" id="outlined-basic" label="Create a Playlist" variant="outlined" />
</form>
) 





}

