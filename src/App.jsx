import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Start from './pages/Start';

import SignUp from './pages/sign-up/SignUp';
import { TopicYesNo } from './pages/create-topic/TopicYesNo';
import { TopicNo } from './pages/create-topic/TopicNo';
import { TopicList } from './pages/create-topic/TopicList';
import ProjectDetail from './pages/project/ProjectDetail';
import { CreateTitle } from './pages/create-project/CreateTitle';
import { CreateProject } from './pages/create-project/CreateProject';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/sign-up-1" element={<SignUp />} />
          <Route path="/mainpage" element={<div>mainpage</div>} />

          <Route path="/topic" element={<TopicYesNo></TopicYesNo>} />
          <Route path="/topic-no" element={<TopicNo></TopicNo>} />
          <Route
            path="/topic-no/topic-list"
            element={<TopicList></TopicList>}
          />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/create-project" element={<CreateProject />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
