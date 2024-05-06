import './App.css';

import { CreateBoardPage } from 'pages/create-project/CreateBoardPage';
import CreateProjectPage from 'pages/create-project/CreateProjectPage';
import {
  Recommendation,
} from 'pages/create-project/CreateTopic/Recommendation';
import ProjectDetailPage from 'pages/detail-project';
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
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
          <Route path="/create-project" element={<CreateProjectPage />} />
          <Route path="/create-topic/keyword" element={<Recommendation />} />
          <Route path="/create-board" element={<CreateBoardPage />} />
          <Route path="/myproject/:id" element={<ProjectDetail />} />
          <Route path="/myproject" element={<MyProject />} />
          {/* <Route path="/myproject/list" element={<MyProjectList />} /> */}
          <Route path="/myproject/:id/finish" element={<End />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
