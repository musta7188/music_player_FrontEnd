import React from "react";
import { ThemeProvider, withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Hidden from "@material-ui/core/Hidden";
import Navigator from "./Navigator";
import Header from "./Header";
import { styles, drawerWidth, theme } from "./StyleComponent/HomePageStyle";
import SongsContainer from '../AllSongsHomePage/SongsContainer'
import PropTypes from 'prop-types';
import HeaderSong from './HeaderSong'
function HomePage(props) {
  const { classes, logOut } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
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
            <Navigator PaperProps={{ style: { width: drawerWidth } }} />
          </Hidden>
        </nav>
        <div className={classes.app}>
          <Header logOut={logOut} onDrawerToggle={handleDrawerToggle} />
          <main className={classes.main}>
            <SongsContainer />
          </main>
          <footer className={classes.footer}>
           <HeaderSong/>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);