import React, { Suspense, useEffect } from 'react'
import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loading from './components/Loading';
import jsonData from "./db.json"
import { useDispatch } from 'react-redux';
import { setData } from "./redux/actions.js"; 

const Dashboard = lazy(()=> import("./pages/dashboard"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setData(jsonData));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
        
        {/* Charts */}
        
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
