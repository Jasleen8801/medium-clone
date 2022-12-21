import React from 'react'
import HomeHeader from './HomeHeader'
import HomeMain from './HomeMain'
import RecommendedPost from './RecommendedPost'
import './css/index.css'

const index = () => {
    return (
        <div>
            <HomeHeader />
            <HomeMain />
            <RecommendedPost />
        </div>
    )
}

export default index
