import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './home'
import Sidebar from './sidebar'
import Profile from './profile';
import Posts from './posts';
import Gallery from './gallery';
import Todo from './todo';
import { store } from './store';
import { Provider } from 'react-redux';




function App() {


  return (
    <Provider store = {store}>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Sidebar />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/todo" element={<Todo />} />
        </Route>
      </Routes>
    </div>
    </Provider>
  );
}
export default App;

