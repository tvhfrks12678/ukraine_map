import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const SinglePostPage = () => {
  const params = useParams();
  const postId = params.postId;

  const post = useSelector((state) =>
    state.maps.find((map) => map.id === postId)
  );

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="post">
        <h2>{post.longitude}</h2>
        <p className="post-content">{post.explanation}</p>
      </article>
    </section>
  );
};
