import React from "react";
import {getModalStyle, useStyles, rand} from '../../Styles/AllSongsHomePageStyles'
import Modal from "@material-ui/core/Modal";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import FormAddSong from "./FormAddSong2";

function AddSongModal2({ song }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <p>Select a Playlist</p>
      <FormAddSong   setOpen={setOpen} song={song} />
    </div>
  );

  return (
    <div>
      <PlaylistAddIcon onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default AddSongModal2;
