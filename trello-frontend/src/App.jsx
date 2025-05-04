import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import Dashboard from './pages/Dashboard';
import Workspace from './pages/Workspace';
import Board from './pages/Board';
import Login from './auth/Login';
import Signup from './auth/Signup';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/workspace/:id" element={<ProtectedRoute><Workspace /></ProtectedRoute>} />
          <Route path="/workspace/:id/board/:boardId" element={<ProtectedRoute><Board /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
