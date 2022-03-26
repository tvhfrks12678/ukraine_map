import React from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TopPage } from './components/pages/TopPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TagSearchList } from './components/templates/TagSearchList';
import { PostList } from './components/templates/PostList';
import { Post } from './components/organisms/Post';

Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopPage />}>
          <Route path="" element={<PostList />} />
          <Route path="tagsearch" element={<TagSearchList />} />
          <Route path="postlist" element={<PostList />} />
          <Route path="post" element={<Post />}>
            <Route path=":postId" element={<Post />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
