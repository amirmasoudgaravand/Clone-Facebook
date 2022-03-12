import React from 'react'
import './widgets.css'
function Widgets() {
    return (
        <div className="widgets">

            <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FCristiano%2Fvideos%2F1153104181891613%2F&show_text=false&width=369&t=0"
                width="289" height="476"
                style={{ border: 'none', overflow: "hidden" }}

                scrolling="no" frameborder="0" allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen="true"></iframe>


        </div>
    )
}

export default Widgets
