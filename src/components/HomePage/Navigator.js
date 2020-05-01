import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import SearchIcon from '@material-ui/icons/Search';

import styles from './StyleComponent/NavigatorStyle'




function Navigator(props) {
  const { classes, ...other } = props;
  const [homePage, setHomePage] = useState(false)
  const [playLists, setPlayLists] = useState(false)
  const [Search, setSearch] = useState(false)

 const categories = [
    {
      id: 'Develop',
      children: [
        { id: 'Home Page', icon: <PeopleIcon />, active: homePage },
        { id: 'Playlists', icon: <QueueMusicIcon  />, active: playLists },
        { id: 'Search', icon: <SearchIcon  />, active: Search }
      ],
    },
    
  ];

 const handleState = (command) => {


  
if(command === "Home Page"){
  setHomePage(true)
  setPlayLists(false)
 setSearch(false)
}else if(command === "Playlists"){
  setPlayLists(true)
  setHomePage(false)
  setSearch(false)
}else if (command === "Search"){
  setSearch(true)
  setHomePage(false)
  setPlayLists(false)
}
 
 }


 

  return (
    
    <Drawer variant="permanent" {...other}>
     
}
      <List disablePadding>
        <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
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
           User Name
          </ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <React.Fragment key={id}    >
            <ListItem className={classes.categoryHeader}  >
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
                <ListItemIcon className={classes.itemIcon} >{icon}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                  }}
                  onClick={() => handleState(childId) }
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