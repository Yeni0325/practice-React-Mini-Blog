import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="*" element={<EmptyPage/>}/>
        </Routes> */}
      </div>
    </BrowserRouter>
  )
}

export default App
