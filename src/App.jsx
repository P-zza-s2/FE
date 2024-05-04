import './App.css';

import React, { useEffect } from 'react';

import { CreateBoard } from 'pages/create-project/CreateBoard';
import { CreateTopic } from 'pages/create-project/CreateTopic/CreateTopic';
import {
  Recommendation,
} from 'pages/create-project/CreateTopic/Recommendation';
import { ProjectAbout } from 'pages/detail-project/ProjectAbout';
import { Main } from 'pages/home';
import MyProject from 'pages/mypage/MyProjectList';
import ProjectDetail from 'pages/mypage/ProjectProgressDetail';
import Login from 'pages/sign-up/Login';
import End from 'pages/sign-up/ProfileSetUp/End';
import SignUp from 'pages/sign-up/ProfileSetUp/SignUp';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import Layout from './components/layout/Layout';

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/mainpage" element={<Main />} />
          <Route path="/project-about" element={<ProjectAbout />} />
          <Route path="/create-topic" element={<CreateTopic />} />
          <Route path="/create-topic/keyword" element={<Recommendation />} />
          <Route path="/create-project" element={<CreateBoard />} />
          <Route path="/myproject/:id" element={<ProjectDetail />} />
          <Route path="/myproject" element={<MyProject />} />
          <Route path="/myproject/list" element={<MyProjectList />} />
          <Route path="/myproject/:id/finish" element={<End />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
