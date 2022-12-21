import React from "react";
// import LandingRecommendedPost from "./LandingRecommendedPost";
import { Link } from "react-router-dom";

const LandingMain = () => {
    // const [tab] = useState(0)

    return (
        <div className="landing-main">
            <div className="landing-main-container">
                <div className="landing-main-left">
                    <div className="landing-main-tabs">
                        <div>
                            <span>FOLLOWING</span>
                        </div>
                        <div>
                            <span>RECOMMENDED FOR YOU</span>
                        </div>
                        <div className="landing-write-story">
                            <h6>Share your ideas with millions of readers.</h6>
                            <Link to="/new-story">
                                <button>Write on Medium</button>
                            </Link>
                        </div>
                        {/* {tab === 1 && (
                            <div className="landing-recommended-posts">
                                <LandingRecommendedPost/>
                            </div>
                        )} */}
                    </div>
                </div>
                <div className="landing-main-right">
                    <div className="recommended-topics">
                        <h2>Recommended Topics</h2>
                        <div className="topic">
                            <span>Technology</span>
                            <span>Money</span>
                            <span>Business</span>
                            <span>Productivity</span>
                            <span>Psychology</span>
                            <span>Mindfulness</span>
                            <span>Art</span>
                        </div>
                    </div>
                    <div className="follow">
                        <h2>Who to follow</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingMain;
