import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReactArticles = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get('https://hn.algolia.com/api/v1/search?query=react%27')
            .then(res => setPosts(res.data.hits));
    }, []);



    return (
        <div>
            {
                posts.map(post =>
                    <ol>{post.title}</ol>)
            }
        </div>
    );
}
export default ReactArticles