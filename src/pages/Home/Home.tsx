import React, { Fragment } from 'react';
import Header from '../../components/Header/Header';
import GridItem from '../../components/GridItem/GridItem';

interface Props {}

export type VideoPreview = {
    snippetTitle: string;
    snippetThumbneil: string;
    channelId: string;
    channelTitle: string;
    channelSnippetThumbneil: string;
};

const Home: React.FC<Props> = () => {
    const videoList: VideoPreview[] = new Array<VideoPreview>(10).fill({
        snippetTitle: 'Джони нашел себе невесту! Шоу Карины Кросс и Дани Милохина. Кто твой подписчик?',
        snippetThumbneil: 'https://i.ytimg.com/vi/EAvcEGUzy1c/sddefault.jpg',
        channelId: 'UCHK357UDDmL6EMTb4YPE7ew',
        channelTitle: 'GEORGY KAVKAZ',
        channelSnippetThumbneil: 'https://yt3.ggpht.com/ytc/AKedOLQRvGzgc3l7KeQvXLnhKpjgbV3kYLueRVwGOC5k=s88-c-k-c0x00ffffff-no-rj'
    });

    const gridContent = videoList.map(video => <GridItem data={video} />);

    return (
        <Fragment>
            <Header />
            <div className="timdb-left-sidebar">
                SIDEBAR BODY!!!
            </div>
            <div className="timdb-content">
                <div className="timdb-grid-renderer">
                    {gridContent}
                </div>
            </div>
        </Fragment>

    )
}

export default Home
