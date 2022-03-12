import React, { useState, useEffect } from 'react'
import StoryReel from './StoryReel';
import MessageSender from '../message/MessageSender';
import './feed.css';
import Post from "../post/Post";
import db from '../../firebase';
function Feed({ photo, name }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('post').orderBy('timestamp', 'desc').onSnapshot((snapshot) => setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        );

    }, []);

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender photo={photo} name={name} />
            {posts.map((post) => (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}
        </div>
    )
}

export default Feed
