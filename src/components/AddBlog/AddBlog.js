import axios from 'axios';
import React from 'react';
import { useForm, placeholder } from "react-hook-form";
import useFirebase from '../../hooks/useFirebase';
import './AddBlog.css';

const AddBlog = () => {
    const { user, registerUser } = useFirebase();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/blogs', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Your blog post successfully')
                    reset();
                }
            })
    };

    return (
        <div className="text-center my-5 add-blog">
            <h2 className="mb-5">Write a new Blog</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <select {...register("type")} >
                    <option value="article">Article</option>
                    <option value="education">Education</option>
                    <option value="meetup">Meet Up</option>
                </select>
                {/* <input {...register("firstName", { required: true, maxLength: 20 })} Placeholder="Name" /> */}
                <input {...register("title")} placeholder="Title" />
                <textarea {...register("description")} placeholder="Description" />
                <input {...register("imgUrl")} placeholder="Image URL" />
                <input {...register("photoUrl")} placeholder="User Photo URL" defaultValue={user.photoURL} />
                <input {...register("displayName")} placeholder="User Display Name" defaultValue={user.displayName} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddBlog;