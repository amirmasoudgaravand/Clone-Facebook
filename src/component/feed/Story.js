import { Avatar } from '@material-ui/core';
import React from 'react'
import './story.css';

function Story({ image, profilesrc, title }) {
    return (
        <div className="story"
            style={{ backgroundImage: `url(${image})` }} >
            <Avatar className="storyavatar" src={profilesrc} />
            <h4>{title} </h4>
        </div>
    )
}

export default Story
