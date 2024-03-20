import React, { Suspense, useEffect } from 'react'
import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loading from './components/Loading';
import jsonData from "./db.json"
import { useDispatch } from 'react-redux';
import { setData } from "./redux/actions.js"; 
import Bar from './pages/Bar';
import Pie from "./pages/Pie";
import Line from "./pages/Line";



const Dashboard = lazy(()=> import("./pages/dashboard"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch action to set data from JSON into Redux state
    dispatch(setData(jsonData));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/bar' element={<Bar/>}/>
          <Route path='/pie' element={<Pie/>}/>
          <Route path='/Line' element={<Line/>}/>

        {/* Charts */}
        
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
