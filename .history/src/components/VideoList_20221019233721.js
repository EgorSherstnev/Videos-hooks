import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
    const renderList = videos.map(() => {
        return <VideoItem />
    });

    return <div>{renderList}</div>;
};

export default VideoList;