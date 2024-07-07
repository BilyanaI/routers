import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Pages/Home';
import BranchNetwork from './Pages/BranchNetwork';
import Employee from './Pages/Employee';
import Branches from './Pages/Branches';
import Offices from './Pages/Offices';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="home" />}/>
          <Route path='/' element={<Home />}>
            <Route path='home' element={<BranchNetwork />} />
            <Route path='branches' element={<Branches />} >
               
            </Route>
            <Route path='оffices' element={<Offices />} >
                <Route path=':employeeId' element={<Employee/>}/>
            </Route>
            <Route path='employee' element={<Employee />} ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
