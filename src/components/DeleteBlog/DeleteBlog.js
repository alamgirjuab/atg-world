import React, { useEffect, useState } from 'react';

const DeleteBlog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://pure-cliffs-24002.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    const handleDelete = (id) => {
        const url = `https://pure-cliffs-24002.herokuapp.com/${id}`;
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
            <h2 className="text-center my-5 text-primary">Remove a blog</h2>
            {
                blogs.map(blog => <div key={blog._id} className="d-flex justify-content-between align-items-center mb-5 shadow container">
                    <img className="img-thumbnail w-25" src={blog.imgUrl} alt="" />
                    <div className="mx-5">
                        <h6>{blog.type}</h6>
                        <h4>{blog.title}</h4>
                        <p>{blog.description}</p>
                        <img className="img-fluid rounded-circle" src={blog.photoUrl} alt="" />
                        <h5>{blog.displayName}</h5>
                    </div>
                    <button onClick={() => handleDelete(blog._id)}>Delete</button>

                </div>)
            }
        </div>
    );
};

export default DeleteBlog;