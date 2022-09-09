import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom'
import { useHome } from './useHome';

export const Home: React.FC = () => {
    const [selectedVideo, setSelectedVideo] = useState<number | null>()
    const { loading, videos, error } = useHome();
    const navigate = useNavigate()



    if (loading) {
        return (<div>Loading....</div>)
    }


    if (error) {
        return (<div>{error}</div>)
    }
    return (
        <div className="main">
            <div className="button-container">
                <button className='upload-btn' onClick={() => {
                    navigate(`/upload`)
                }}>
                    Upload
                </button>
            </div>
            <div className='container'>
                {videos?.map(video => {
                    const thumbNails = video?.thumbNails as string[];
                    const thumbNail = thumbNails[thumbNails.length - 1];
                    if (selectedVideo == video?.id) {
                        return (
                            <div key={video?.id} >
                                <video width={"256"} height={"256"} autoPlay>
                                    <source src={video?.fileLocation as string}></source>
                                </video>
                            </div>
                        )
                    }
                    return (
                        <div key={video?.id} className="item" onClick={() => setSelectedVideo(video?.id)}>
                            <img src={thumbNail} title={video?.title as string} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}