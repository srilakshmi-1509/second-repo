import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchPage from './Google';
import ResultPage from './GooglePage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchPage/>} />
      <Route path="/results" element={<ResultPage />} />
    </Routes>
  );
}
 
export default App;