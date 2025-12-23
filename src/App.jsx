import React from 'react'
import StudetForms from './Task/StudentForms';
import {Routes, Route} from 'react-router-dom';
import StudentTable from './Task/StudentTable';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<StudetForms />} />
        <Route path='/table' element={<StudentTable />} />
      </Routes>
    </>
  )
}

export default App
