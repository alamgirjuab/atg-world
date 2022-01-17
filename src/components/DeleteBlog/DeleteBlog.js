import React, { useEffect, useState } from 'react';

const DeleteBlog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    const handleDelete = (id) => {
        const url = `http://localhost:5000/blogs/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('deleted successfully')
                    const remaining = blogs.filter(blog => blog._id !== id);
                    setBlogs(remaining);
                }
            })
    }

    return (
        <div>
            <h2>Remove a blog</h2>
            {
                blogs.map(blog => <div key={blog._id} className="d-flex justify-content-between mb-5 align-items-center order-container">
                    <img className="img-fluid" src={blog.imgUrl} alt="" />
                    <div className="mx-5 text-white">
                        <h3 className="mb-5">{blog.type}</h3>
                        <h3 className="mb-5">{blog.title}</h3>
                        <p>{blog.description}</p>
                        <img src={blog.photoUrl} alt="" />
                        <h5>{blog.displayName}</h5>
                    </div>
                    <button onClick={() => handleDelete(blog._id)}>Delete</button>

                </div>)
            }
        </div>
    );
};

export default DeleteBlog;