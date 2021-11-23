import React from 'react';
import { VideoPreview } from '../../pages/Home/Home';

interface Props {
    data: VideoPreview
}

const GridItem: React.FC<Props> = ({data}) => {
    console.log('===========', data);
    return (
        <div className="timdb-grid-item">
            <div className="timdb-grid-item__thumbnail">
                <img src={data.snippetThumbneil} alt={data.snippetThumbneil} />
            </div>
            <div className="timdb-grid-item__detailes">
                <div className="timdb-grid-item__avatar">
                    <img src={data.channelSnippetThumbneil} alt={data.channelSnippetThumbneil} />
                </div>
                <div className="timdb-grid-item__meta">
                    <h3>{data.snippetTitle}</h3>
                </div>
            </div>
        </div>
    );
}

export default GridItem;