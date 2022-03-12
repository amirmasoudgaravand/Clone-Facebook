import React from 'react'
import './post.css'
import { Avatar } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import NearMeIcon from '@material-ui/icons/NearMe'
import { ExpandMoreOutlined } from '@material-ui/icons'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

function Post({ profilePic, image, username, timestamp, message }) {
    return (
        <div className="post">
            <div className="posttop">
                <Avatar src={profilePic}
                    className="postavatar" />
                <div className="posttopinfo">
                    <h3>{username} </h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()} </p>
                </div>
            </div>
            <div className="postbottom">
                <p>{message} </p>
            </div>

            <div className="postimage">
                <img src={image} alt="" />
            </div>

            <div className="postoptions">
                <div className="postoption">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>


                <div className="postoption">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>


                <div className="postoption">
                    <NearMeIcon />
                    <p>Share</p>
                </div>


                <div className="postoption">
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                    <p>LogOut</p>

                </div>

            </div>
        </div>

    )
}

export default Post
