import React from 'react'
import "./App.css"
import Layout from './components/layout/Layout'
import Sidebar from './components/sidebar/Sidebar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Dashbaord from './components/dashboard/Dashbaord';

const App = () => {
  return (
    <>
      <Router>
        <div className="container-wrapper">
          <Layout />
          <div className="main-container">
            <Sidebar />
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Dashbaord />} />
        </Routes>
      </Router>
    </>
  )
}

export default App