import React from 'react'
import { Container } from 'react-bootstrap'
import BlogList from './components/BlogList'
import BlogTopSection from './components/BlogTopSection'

export default function Blog() {
    return (
        <div>
            <div className='main-backgrond'>
                <BlogTopSection />
                <BlogList />
            </div>

        </div>
    )
}
