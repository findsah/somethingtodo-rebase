import React from 'react'
import { Container } from 'react-bootstrap'
import BlogList from './components/BlogList'
import BlogTopSection from './components/BlogTopSection'

export default function Blog() {
    return (
        <div>
            <div style={{
                // filter: "drop-shadow(0px 6px 24px rgba(0, 0, 0, 0.2))",
                background: '#D5EAFF'
            }}>
                <BlogTopSection />
                <BlogList />
            </div>

        </div>
    )
}
