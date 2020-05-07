import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles((theme) => ({
    root: {
        height: "10vh",
       
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
      },
      cssLabel: {
        color : 'green'
      },
      cssOutlinedInput: {
        background: "#A6E797",
        border: 20
      },
      cssFocused: {},
      notchedOutline: {
        borderWidth: '1px',
        borderColor: 'green !important'
      },
}))


export default function CreatePlaylist({handleChange, handleSubmit}) {
    const classes = useStyles();
    


return(
<form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
  
  <TextField onChange={handleChange} className={classes.cssOutlinedInput}  name="playlist" id="outlined-basic" label="Create a Playlist" variant="outlined" />
</form>
) 



}



        



