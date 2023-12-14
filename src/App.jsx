import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Start from './pages/Start';
import SignUp1 from './pages/SignUp1';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/sign-up-1" element={<SignUp1 />} />
          <Route path="/mainpage" element={<div>mainpage</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
