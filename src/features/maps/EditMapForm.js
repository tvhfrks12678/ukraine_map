import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { mapUpdated } from './mapsSlice';
import { useParams } from 'react-router-dom';

export const EditMapForm = () => {
  const params = useParams();
  const postId = params.postId;

  const map = useSelector((state) =>
    state.maps.find((map) => map.id === postId)
  );

  const [longitude, setLongitude] = useState(map.longitude);
  const [latitude, setLatitude] = useState(map.latitude);
  const [twitterId, setTwitterId] = useState(map.twitterId);
  const [explanation, setExplanation] = useState(map.explanation);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onLongitudeChanged = (e) => setLongitude(e.target.value);
  const onLatitudeChanged = (e) => setLatitude(e.target.value);
  const onTwitterIdChanged = (e) => setTwitterId(e.target.value);
  const onExplanationChanged = (e) => setExplanation(e.target.value);

  const onSavePostClicked = () => {
    if (longitude && latitude && twitterId && explanation) {
      dispatch(
        mapUpdated({
          id: postId,
          longitude,
          latitude,
          twitterId,
          explanation,
        })
      );
      navigate(`/posts/${postId}`);
    }
  };

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postLongitude">Longitude:</label>
        <input
          type="text"
          id="postLongitude"
          name="postLongitude"
          value={longitude}
          onChange={onLongitudeChanged}
        />
        <label htmlFor="postLatitude">Latitude:</label>
        <input
          type="text"
          id="postLatitude"
          name="postLatitude"
          value={latitude}
          onChange={onLatitudeChanged}
        />
        <label htmlFor="postTwitterId">TwitterId:</label>
        <input
          type="text"
          id="postTwitterId"
          name="postTwitterId"
          value={twitterId}
          onChange={onTwitterIdChanged}
        />
        <label htmlFor="postExplanation">Explanation:</label>
        <input
          type="text"
          id="postExplanation"
          name="posExplanation"
          value={explanation}
          onChange={onExplanationChanged}
        />
        <button type="button" onClick={onSavePostClicked}>
          Save post
        </button>
      </form>
    </section>
  );
};
