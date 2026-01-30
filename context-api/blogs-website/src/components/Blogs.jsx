import react from "react";
import { useContext } from "react";
import { ContextApi } from "../context/ContextApi";
import Spinner from "./Spinner";
import "./Blogs.css";

const Blogs = () => {
    // conssuming context api data 
    const {loading , posts} = useContext(ContextApi);
    return (
        <div className="blogs-container">
            {
                loading ? (
                    <Spinner />
                ) : (
                    posts.length === 0 ? (
                        <div className="no-posts">No posts available.</div>
                    ) : (
                        posts.map((post) => (
                            <div className="blog-post" key={post.id}>
                                <h2 className="blog-title">{post.title}</h2>
                                <p className="blog-meta">By <span className="blog-author">{post.author}</span> on <span className="blog-category">{post.category}</span></p>
                                <p className="blog-date">Posted On {post.date}</p>
                                <p className="blog-content">{post.content}</p>
                                <div className="blog-tags">
                                    {post.tags.map((tag, index) => (
                                        <span className="blog-tag" key={index}>{`#${tag}`}</span>
                                    ))}
                                </div>
                            </div>
                        ))
                    )
                )
            }
        </div>
    )
}

export default Blogs;