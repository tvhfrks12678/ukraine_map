import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TopPage } from './components/pages/TopPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TweetMemoIndex } from './components/organisms/TweetMemoIndex';
import { TweetMemo } from './components/organisms/TweetMemo';
import { NoMatchingUrl } from './components/pages/NoMutchingUrl';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopPage />}>
          <Route path="" element={<TweetMemoIndex />} />
          <Route path="tweet-memo" element={<TweetMemo />}>
            <Route path=":tweetMemoId" element={<TweetMemo />} />
          </Route>
        </Route>
        <Route path="*" element={<NoMatchingUrl />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
