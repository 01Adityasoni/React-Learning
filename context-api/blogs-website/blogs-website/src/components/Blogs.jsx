import react from 'react';
import { useContext } from 'react';
import Spinner from './Spinner';
import { AppContext } from '../context/AppContext';
import './Blogs.css';
const Blogs = () => {
    // Consuming context data 

    const {loading , posts} = useContext (AppContext);

    return (
        <div>
            {
                loading ? (<Spinner />) : (
                    posts.length === 0 ? (<div>No posts available</div>) : (posts.map( (post) => (
                        <div key={post.id}>
                            <p className='title'>{post.title}</p>
                            <p>
                                By <span>{post.author}</span> On <span>{post.category}</span>
                            </p>
                            <p> posted on {post.date}</p>
                                <p>{post.content}</p>

                                <div>
                                    {post.tags.map( (tag , index) => (
                                         <span key={index}>{`#${tag}`}</span>
                                    ) )}
                                </div>
                                
                                </div>
                    )))
                ) 
            }
        </div>
    );
}
export default Blogs;