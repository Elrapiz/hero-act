import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import './ShowBlog.css'
import ojtBlogs from '../assets/ojt_blog.json'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useState, useEffect } from 'react'
import FsLightbox from "fslightbox-react"

const ShowBlog = () => {
    const params = useParams()
    const entry = ojtBlogs.find(blog => blog.id == params.id)
    const [markdownContent, setMarkdownContent] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [toggler, setToggler] = useState(false);

    useEffect(() => {
        const fetchMarkdown = async () => {
            try {
                const response = await fetch(entry.public_markdown_path)
                if (!response.ok) {
                    throw new Error(`Failed to fetch markdown: ${response.status}`)
                }
                const markdown = await response.text()
                setMarkdownContent(markdown)
                setLoading(false)
            } catch (err) {
                console.error('Error fetching markdown:', err)
                setError(err.message)
                setLoading(false)
            }
        }

        if (entry && entry.public_markdown_path) {
            fetchMarkdown()
        }
    }, [entry])

    return <>
        <div className='nav-placeholder'></div>

        <div className='wrapper relative'>
            <div className="action_btn">
                <Link to='/blog' className="back-btn">
                    <span className="back-icon">←</span>
                    <span>Back</span>
                </Link>
            </div>

            <div className="blog__img-wrapper">
                {entry.public_media_paths.length > 0? <img onClick={() => setToggler(!toggler)} loading="lazy" src={entry.public_media_paths[0]} alt="No image" /> : <img loading="lazy" src="https://fakeimg.pl/600x400?text=No+media" alt="No image" />}
            </div>

            <p>📅 {entry.date_coverage} | {entry.hours_spent}</p>

			<FsLightbox
				toggler={toggler}
				sources={entry.public_media_paths}
			/>

            <div className="markdown-content">
                {loading && <p>Loading content...</p>}
                {error && <p className="error">Error loading content: {error}</p>}
                {!loading && !error && (
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {markdownContent}
                    </ReactMarkdown>
                )}
            </div>
        </div>
    </>
}

export default ShowBlog
