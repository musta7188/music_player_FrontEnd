import React from "react";
import { ThemeProvider, withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Hidden from "@material-ui/core/Hidden";
import Navigator from "./Navigator";
import Header from "./Header";
import { styles, drawerWidth, theme } from "./StyleComponent/HomePageStyle";
import SongsContainer from "../AllSongsHomePage/SongsContainer";
import PropTypes from "prop-types";
import HeaderSong from "./HeaderSong";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchPage from "../Search/SearchPage";
import Playlist from "../Playlist/Playlist";
import PlaylistShow from "../Playlist/PlaylistShow";

function HomePage(props) {
  const { classes, logOut, username } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handelSelection = (selection) => {
    switch (selection) {
      case "Home Page":
        props.history.push("/songs");
        break;
      case "playlists":
        props.history.push("/playlists");
        break;
      case "search":
        props.history.push("/search");
        break;
    }
  };

  const imge = "https://i.ytimg.com/vi/kVGXAfzVIkE/maxresdefault.jpg";

  return (
    <div style={{ backgroundImage: `url(${imge})` }}>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <nav className={classes.drawer}>
            <Hidden smUp implementation="js">
              <Navigator
                PaperProps={{ style: { width: drawerWidth } }}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
              />
            </Hidden>
            <Hidden xsDown implementation="css">
              <Navigator
                PaperProps={{ style: { width: drawerWidth } }}
                currentPath={props.history.location.pathname.slice(1)}
                props={props}
                handelSelection={handelSelection}
                username={username}
              />
            </Hidden>
          </nav>
          <div className={classes.app}>
            <Header logOut={logOut} onDrawerToggle={handleDrawerToggle} />
            <main className={classes.main}>
              <Route
                exact
                path={"/songs"}
                render={(props) => <SongsContainer {...props} />}
              />

              <Route
                exact
                path={"/search"}
                render={(props) => <SearchPage {...props} />}
              />

              <Route
                exact
                path={"/playlists"}
                render={(props) => <Playlist {...props} username={username} />}
              />

              <Route
                exact
                path="/playlist-show/:id"
                render={(props) => <PlaylistShow {...props} />}
              />
            </main>
            <footer className={classes.footer}>
              <HeaderSong />
            </footer>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);
