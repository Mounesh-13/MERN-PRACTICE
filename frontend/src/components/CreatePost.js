import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = { title, content, imageUrl, userId: 'user_id' }; // Replace 'user_id' with actual user ID

    try {
      await axios.post('http://localhost:5000/api/posts', postData);
      alert('Post created');
    } catch (err) {
      alert('Error creating post');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content"></textarea>
      <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
