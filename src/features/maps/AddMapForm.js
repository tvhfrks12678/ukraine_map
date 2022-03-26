import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { mapAdded } from './mapsSlice';

export const AddMapForm = () => {
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [twitterId, setTwitterId] = useState('');
  const [explanation, setExplanation] = useState('');

  const dispatch = useDispatch();

  // longitude,
  // latitude,
  // twitterId,
  // explanation = '',
  // tags = [],

  const onLongitude = (e) => setLongitude(e.target.value);
  const onLatitude = (e) => setLatitude(e.target.value);
  const onTwitterId = (e) => setTwitterId(e.target.value);
  const onExplanation = (e) => setExplanation(e.target.value);

  const onSavePostClicked = () => {
    if (longitude && latitude && twitterId && explanation) {
      dispatch(
        mapAdded({
          id: nanoid(),
          longitude,
          latitude,
          twitterId,
          explanation,
        })
      );
    }
    setLongitude('');
    setLatitude('');
    setTwitterId('');
    setExplanation('');
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postLongitude">Longitude:</label>
        <input
          type="text"
          id="postLongitude"
          name="postLongitude"
          value={longitude}
          onChange={onLongitude}
        />
        <label htmlFor="postLatitude">Latitude:</label>
        <input
          type="text"
          id="postLatitude"
          name="postLatitude"
          value={latitude}
          onChange={onLatitude}
        />
        <label htmlFor="postTwitterId">TwitterId:</label>
        <input
          type="text"
          id="postTwitterId"
          name="postTwitterId"
          value={twitterId}
          onChange={onTwitterId}
        />
        <label htmlFor="postExplanation">Explanation:</label>
        <input
          type="text"
          id="postExplanation"
          name="posExplanation"
          value={explanation}
          onChange={onExplanation}
        />
        <button type="button" onClick={onSavePostClicked}>
          Save post
        </button>
      </form>
    </section>
  );
};
