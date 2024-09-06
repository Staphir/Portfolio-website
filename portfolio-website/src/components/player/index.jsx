import "./style.scss";
import React from 'react';
import { Player } from 'video-react';

function PlayerContainer({video}) {
    const srcPath = process.env.PUBLIC_URL + '/assets';
    const srcVideo = srcPath+video.src;
    return (
        <Player>
          <source src={srcVideo} />
        </Player>
      );
}

export default PlayerContainer;
