import React from "react"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
    <div className="video">
        <iframe
            src={videoSrcURL}

            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
            height='315'
            width='560'
        />
    </div>
)
export default Video