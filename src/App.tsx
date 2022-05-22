import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/main';
import SubPage from './components/subPage';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/subPage" element={<SubPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    // <Main />
  );
}

export default App;
