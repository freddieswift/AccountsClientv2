import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login, Dashboard } from './pages'
import { ProtectedRoute } from './components'
import { FinancialTab, SockTab } from './tabs'


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

            <ProtectedRoute>
              <SockTab />
            </ProtectedRoute>

          } />
          <Route path='/financial' element={<ProtectedRoute><FinancialTab /></ProtectedRoute>} />
        </ Route>
        <Route path='*' element={<div>whoops...</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
