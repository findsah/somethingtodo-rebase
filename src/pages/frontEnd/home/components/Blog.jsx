import React from 'react'
import { Link } from 'react-router-dom'

export default function Blog() {
    return (
        <>
            <div className="container-fluid" style={{ position: "relative", overflowX: "hidden" }}>
                <div className="blogHighlight aos-init aos-animate" data-aos="fade-left" data-aos-duration="2000"></div>
                <p className="checkout">checkout our blog for more updates </p>
            </div>

            <Link to="/blog">
                <div className="but">
                    <button className="see-but">SEE ALL BLOG POST</button>
                </div>
            </Link>
        </>
    )
}
