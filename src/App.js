import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TopPage } from './components/templates/TopPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TweetMemoIndex } from './components/organisms/TweetMemoIndex';
import { TweetMemo } from './components/organisms/TweetMemo';
import { NoMatchingUrl } from './components/templates/NoMutchingUrl';
import { SidebarAbout } from './components/modules/SidebarAbout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopPage />}>
          <Route path="" element={<TweetMemoIndex />} />
          <Route path="tweet-memo" element={<TweetMemo />}>
            <Route path=":tweetMemoId" element={<TweetMemo />} />
          </Route>
          <Route path="about" element={<SidebarAbout />} />
        </Route>
        <Route path="*" element={<NoMatchingUrl />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
