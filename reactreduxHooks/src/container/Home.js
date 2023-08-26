import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {newsSelectors} from '../redux/newsData';
import {
    getLatestNews,
    getArticleNews,
    getGalleryNews
} from '../services/getNewsData';

import LatestNews from '../component/Home/LatestDisplay';
import ArticleNews from '../component/Home/ArticleDisplay';
import GalleryNews from '../component/Home/GalleryDisplay';

const Home = () => {
    const dispatch = useDispatch();

    const latestNewsList = useSelector(
        newsSelectors.getLatestNews
    )

    const articleNewsList = useSelector(
        newsSelectors.getArticleNews
    )

    const galleryNewsList = useSelector(
        newsSelectors.getGalleryNews
    )

    useEffect(() => {
        dispatch(getLatestNews())
        dispatch(getArticleNews())
        dispatch(getGalleryNews())
    },[])

    return(
        <>
            <LatestNews ldata={latestNewsList?.data}/>
            <ArticleNews adata={articleNewsList?.data}/>
            <GalleryNews gdata={galleryNewsList?.data}/>
        </>
    )
}

export default Home