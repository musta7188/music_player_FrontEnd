import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import SearchIcon from "@material-ui/icons/Search";

import styles from "./StyleComponent/NavigatorStyle";

function Navigator(props) {
  const { classes, ...other } = props;

  const { handelSelection, username} = props
  const [active, setActive] = useState();


  useEffect(() => {
    const acutalPath = props.currentPath;

    switch (acutalPath) {
      case "songs":
        setActive("Home Page");
        break;
      case "playlist":
        setActive("playlists");
        break;
      case "search":
        setActive("search");
    }
  }, [active]);

  const categories = [
    {
      
      children: [
        {
          id: "Home Page",
          icon: <PeopleIcon />,
          active: active === "Home Page" ? true : false,
        },
        {
          ////capitalize 
          id: "playlists",
          icon: <QueueMusicIcon />,
          active: active === "playlists" ? true : false,
        },
        {
          id: "search",
          icon: <SearchIcon />,
          active: active === "search" ? true : false,
        },
      ],
    },
  ];

  const handleClick = (selection) => {
    

  
    handelSelection(selection)
    return active != selection? setActive(selection): null
  }
 

  return (

    <Drawer variant="permanent" {...other}>

      <List disablePadding>
        <ListItem
          className={clsx(classes.firebase, classes.item, classes.itemCategory)}
        >
          Music Player
        </ListItem>
        <ListItem className={clsx(classes.item, classes.itemCategory)}>
          <ListItemIcon className={classes.itemIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.itemPrimary,
            }}
          >
             {`Welcome ${username}`}
          </ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active }) => (
              <ListItem
                key={childId}
                button
                className={clsx(classes.item, active && classes.itemActiveItem)}
              >
                <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                  }}
                  onClick={() => handleClick(childId)}
                >
                  {childId}
                </ListItemText>
              </ListItem>
            ))}

            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);
