import React from 'react';
import { VideoPreview } from '../../pages/Home/Home';

interface Props {
    data: VideoPreview
}

const GridItem: React.FC<Props> = ({data}) => {
    return (
        <div className="timdb-grid-item">
            <div className="timdb-grid-item__thumbnail">
                <img src={data.snippetThumbneil} alt={data.snippetTitle} />
            </div>
            <div className="timdb-grid-item__detailes">
                <div className="timdb-grid-item__avatar">
                    <img src={data.channelSnippetThumbneil} alt={data.channelTitle} />
                </div>
                <div className="timdb-grid-item__meta">
                    <div className="timdb-grid-item__meta__title">{data.snippetTitle}</div>
                    <div className="timdb-grid-item__meta__block">
                        <div className="timdb-grid-item__meta__block-line">
                            <div className="timdb-grid-item__meta__block-title">{data.channelTitle}</div>
                            <div className="timdb-grid-item__meta__block-badge">
                                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
                                     style={{
                                         pointerEvents: 'none',
                                         display: 'block',
                                         width: '100%',
                                         height: '100%;',
                                         fill: 'currentColor'
                                     }}>
                                    <g>
                                        <path
                                            d="M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M9.8,17.3l-4.2-4.1L7,11.8l2.8,2.7L17,7.4 l1.4,1.4L9.8,17.3z"
                                            className="style-scope yt-icon" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="timdb-grid-item__meta__block-line">
                            <div className="timdb-grid-item__meta-block">{data.statisticsViewCount} views</div>
                            <div className="timdb-grid-item__meta-block">{ data.snippetPublishedAt }</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GridItem;