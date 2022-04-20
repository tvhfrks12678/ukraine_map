import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDocs, query, where } from 'firebase/firestore';
import { TweetMemoEntity } from '../entities/tweetMemos/TweetMemoEntity';
import { ukraineInvasionMapsRef } from '../utils/firebaseConfig';

const initialState = {
  tweetMemos: [],
  status: 'idle',
  error: null,
};

export const fetchTweetMemos = createAsyncThunk(
  'tweetMemos/fetchTweetMemos',
  async () => {
    const querySnapshot = await getDocs(ukraineInvasionMapsRef);

    return TweetMemoEntity.getListByquerySnapshot(querySnapshot);
  }
);

export const fetchTweetMemosByTag = createAsyncThunk(
  'tweetMemosByTag/fetchTweetMemosByTag',
  async (tag) => {
    const stateQuery = query(
      ukraineInvasionMapsRef,
      where('tags', 'array-contains', tag)
    );

    const querySnapshot = await getDocs(stateQuery);

    return TweetMemoEntity.getListByquerySnapshot(querySnapshot);
  }
);

const tweetMemosSlice = createSlice({
  name: 'tweetMemos',
  initialState,
  reducers: {
    tweetMemoSet(state, action) {
      state.tweetMemos = state.tweetMemos.concat(action.payload);
    },
    tweetMemosInitialization(state, action) {
      return initialState;
    },
    tweetMemosTagSearch(state, action) {
      const searchTag = action.payload;
      return initialState.filter((tweetMemo) => {
        return tweetMemo.tags.includes(searchTag);
      });
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTweetMemos.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchTweetMemos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tweetMemos = [];
        state.tweetMemos = state.tweetMemos.concat(action.payload);
      })
      .addCase(fetchTweetMemos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchTweetMemosByTag.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchTweetMemosByTag.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tweetMemos = [];
        state.tweetMemos = state.tweetMemos.concat(action.payload);
      })
      .addCase(fetchTweetMemosByTag.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { tweetMemosInitialization, tweetMemosTagSearch, tweetMemoSet } =
  tweetMemosSlice.actions;

export default tweetMemosSlice.reducer;

export const selectAllTweetMemos = (state) => state.tweetMemos.tweetMemos;
