import { Link } from "react-router-dom"
import CenteredHeader from "../components/CenteredHeader"
import './Blog.css'
import ojtBlogs from '../assets/ojt_blog.json'

const Blog = () => {
    return <>
        <div className='nav-placeholder'></div>

        <div className='wrapper'>
            <CenteredHeader title="on the job training" subTitle="A weekly blog for my on-the-job-training project development journey">
                <ol className="blog">
                        {ojtBlogs.map(blog => {
                            return (
                                <li key={blog.id} className="blog__card">
                                    <Link to={`/blog/ojt/${blog.id}`}>
                                        <div className="blog__img-wrapper">
                                            {blog.public_media_paths.length > 0? <img loading="lazy" src={blog.public_media_paths[0]} alt="No image" /> : <img loading="lazy" src="https://fakeimg.pl/600x400?text=No+media" alt="No image" />}
                                        </div>
                                        <h2>{blog.title}</h2>
                                        <p>{blog.sub_title}</p>
                                        <br />
                                        <p><b>Date coverage: </b>{blog.date_coverage}</p>
                                        <p><b>Hours spent: </b>{blog.hours_spent}</p>
                                    </Link>
                                </li>
                            )
                        })}
                </ol>
            </CenteredHeader>
        </div>
    </>
}

export default Blog
