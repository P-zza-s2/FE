import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Start from './pages/Start';
import SignUp from './pages/sign-up/SignUp';
import MyProject from './pages/project/MyProject';
import ProjectDetail from './pages/project/ProjectDetail';
import { CreateProject } from './pages/create-project/CreateProject';
import { CreateTopic } from './pages/create-topic/CreateTopic';
import { TopicKeyword } from './pages/create-topic/TopicKeyword';
import { Recommendation } from './pages/create-topic/Recommendation';
import { Main } from './pages/Main';
import { Project, ProjectAbout } from './pages/project/ProjectAbout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/sign-up-1" element={<SignUp />} />
          <Route path="/mainpage" element={<Main></Main>} />
          <Route
            path="/project-about"
            element={<ProjectAbout></ProjectAbout>}
          />

          <Route path="/create-topic" element={<CreateTopic></CreateTopic>} />
          <Route path="/create-topic/keyword" element={<Recommendation />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/myproject/:id" element={<ProjectDetail />} />
          <Route path="/myproject" element={<MyProject />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
