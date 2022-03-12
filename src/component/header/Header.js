import React from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumICon from '@material-ui/icons/Forum';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header({ photo, name, logout }) {
    return (
        <div className="header">
            <div className="headerleft">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/
Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
                />
                <div className="headerinput">
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook" />
                </div>
            </div>
            <div className="headercenter">
                <div className="headeroption headeroptionactive">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="headeroption">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="headeroption">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div className="headeroption">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className="headeroption">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>
            <div className="headerright">
                <div className="headerinfo">
                    <Avatar src={photo} />
                    <h4>
                        {name}
                    </h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>

                <IconButton>
                    <ForumICon />
                </IconButton>


                <IconButton>
                    <ExpandMoreIcon onClick={logout} />
                </IconButton>
            </div>
        </div>
    )
}

export default Header;
