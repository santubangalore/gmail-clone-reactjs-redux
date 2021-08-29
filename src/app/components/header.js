import React from 'react'
import './header.css';
import MenuIcon from '@material-ui/icons/Menu';
import {Avatar,IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationIcon from '@material-ui/icons/Notifications';

function header() {
    return (
        <div className="header">
            <div className="header__left" >
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="Gmail-Emblem.png" alt="" />
            </div>
            <div className="header__middle">
                <SearchIcon />
                <input type="text" placeholder="Search"></input>
                <ArrowDropDownIcon/>
            </div>
            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationIcon />
                </IconButton>
               <Avatar />
            </div>
        </div>
    )
}

export default header;
