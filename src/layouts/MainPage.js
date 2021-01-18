import React, { useState } from 'react'

import Header from '../components/Header'
import { makeStyles } from "@material-ui/core/styles";
import styles from '../assets/jss/MainPageStyles.js'
import MapPage from '../components/MapPage';
import ProfilePage from '../components/ProfilePage';

const useStyles = makeStyles(styles);

export default function MainPage() {

  const classes = useStyles();

  const [isTooglePage, setTooglePage] = useState(true);

  const togglePage = () => {
    setTooglePage(!isTooglePage)
  }

  return (
    <div className={ classes.wrapper}>
        <Header togglePage={togglePage}/>
        <div className={classes.main}>
        { isTooglePage && 
            <MapPage/>
        }
            { !isTooglePage && 
            <ProfilePage/>
             }
        </div>
      </div>
  )
}


