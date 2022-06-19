import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login, Dashboard } from './pages'
import { ProtectedRoute } from './components'
import { FinancialTab, SockTab, YearTab } from './tabs'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
        >
          <Route path='/socks' element={
            <SockTab />
          } />
          <Route path='/year' element={
            <YearTab />
          } />
          <Route index element={
            <FinancialTab />
          } />
        </ Route>
        <Route path='*' element={<div>whoops...</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
