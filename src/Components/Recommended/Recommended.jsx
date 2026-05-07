import React, { useEffect, useState } from 'react'
import './Recommended.css'
import { API_KEY } from '../../data'
import { value_converter } from '../../data'
import moment from 'moment';
import { Link } from 'react-router-dom';

function Recommended({ categoryId }) {

    const [apiData, setApiData] = useState([]);

    const fetchRecommendedData = async () => {
        const recommendedData_url = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY} `
        await fetch(recommendedData_url).then(res => res.json()).then(data => setApiData(data.items));
    }
    useEffect(() => {
        fetchRecommendedData();
    }, [categoryId])

    return (
        <div className='recommended'>
            {apiData.map((item, index) => {
                return (
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <div className="video-info">
                            <h4>{item.snippet.title}</h4>
                            <p>{item.snippet.channelTitle}</p>
                            <p>{value_converter(item.statistics.viewCount)} &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Recommended