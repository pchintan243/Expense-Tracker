import React, { useMemo } from 'react'
import "./App.css"
import Layout from './components/layout/Layout'
import Sidebar from './components/sidebar/Sidebar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';
import Income from './components/income/Income';
import Expense from './components/expense/Expense';

const App = () => {

  const layoutFunc = useMemo(() => {
    return <Layout />
  }, [])

  return (
    <>
      <Router>
        <div className="container-wrapper">
          {layoutFunc}
          <div className="main-container">
            <Sidebar />
            <div className="main">
              <Routes>
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/incomes" element={<Income />} />
                <Route exact path="/expenses" element={<Expense />} />
              </Routes>
            </div>
          </div>
        </div>

      </Router>
    </>
  )
}

export default App