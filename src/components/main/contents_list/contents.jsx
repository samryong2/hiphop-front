import React, { useEffect, useState } from 'react';
import VideoDetail from '../../main/contents_list/video_detail/video_detail';
import VideoList from '../../main/contents_list/video_list/video_list';
// import VideoDetail from '../../youtube/youtube_detail/video_detail';
// import VideoList from './video_list/video_list';
import styles from './contents.module.css';

const Contents = ({youtube}) => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const selectVideo = (video)=>{
        setSelectedVideo(video);
    }

    useEffect(()=>{
        youtube
        .playList()
        .then(videos => setVideos(videos));
    },[youtube]);

    return(

        <div className={styles.app}>
            {/* <SearchHeader onSearch={search}/> */}
            <section className={styles.content}>
                {selectedVideo && (
                    <div className={styles.detail}>
                    <VideoDetail video={selectedVideo}/>
                    </div>
                )}
                <div className={styles.list}>
                    <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo? 'list' : 'grid'}/>
                </div>
            </section>
        </div>
    );

};

export default Contents;