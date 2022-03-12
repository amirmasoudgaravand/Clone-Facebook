import React, { useState } from 'react'
import './messagesender.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

import db from '../../firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
function MessageSender({ photo, name }) {
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handelSubmit = (e) => {
        e.preventDefault();

        db.collection('post').add({
            message: input,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: photo,
            username: name,
            image: imageUrl
        }).then(() => {
            alert("Data Successfully Submitted");
        }).catch((error) => {
            alert("Error adding document: ", error);
        });
        setInput("");
        setImageUrl("");
    }
    return (
        <div className="messagesender">
            <div className="messagesendertop">
                <Avatar src={photo} />
                <form>
                    <input
                        style={{ width: "285px" }}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="messagesenderinput"
                        placeholder={`what is on your mind ${name} ? `} />

                    <input
                        style={{ paddingRight: "136px" }}
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="image URL (Optional)" />

                    <button onClick={handelSubmit} type="submit" >
                        Hidden Submit
                    </button>
                </form>
            </div>
            <div className="messagesenderbottom">
                <div className="messagesenderoption">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>

                <div className="messagesenderoption">
                    <VideocamIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messagesenderoption">
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>


            </div>
        </div>
    )
}

export default MessageSender
