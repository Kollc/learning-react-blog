import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import MyLoader from './../components/ui/loader/MyLoader';

function PostPage() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState({});

  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });

  const [fetchComments, isLoadingComments, errorComments] = useFetching(async (id) => {
    const response = await PostService.getCommentsById(params.id);
    setComments(response.data);
  })

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);

  if (error) {
    return (<h1>{error}</h1>);
  }

  return (
    <div>
      {isLoading ? <MyLoader /> :
        <div>
          <h1>
            {post.title}
          </h1>
          <div>
            <p>
              {post.body}
            </p>
          </div>
        </div>
      }
      <h2>Комментарии:</h2>
      <div>
        {isLoadingComments
          ?
          <MyLoader />
          :
          comments.map((comment) =>
            <div key={comment.id} style={{ marginTop: '10px', border: '2px solid teal', padding: '10px' }}>
              <h5>{comment.name}</h5>
              <p>{comment.body}</p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default PostPage;
