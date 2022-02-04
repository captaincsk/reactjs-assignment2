
import React from "react";
import "./Nav.css";
import DehazeIcon from "@material-ui/icons/Dehaze";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import { Avatar } from "@material-ui/core";

function Nav(){
    return (
        <div className="nav_container">
            <div className="nav_left">
            <DehazeIcon/>
            <img src="https://blog.logomyway.com/wp-content/uploads/2021/02/gmail-logo.jpg"/>
            <SearchIcon/>
            <input type="text"/>
            </div>
            <div className="nav_right">
            <ViewComfyIcon/>
            <NotificationsIcon/>
            <Avatar/>
            </div>
        </div>
    );
}
export default Nav;