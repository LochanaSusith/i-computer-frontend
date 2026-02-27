
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home.jsx';
import AdminPage from './pages/admin.jsx';
import LoginPage from './pages/login.jsx';

export default function App() {
  return (
    
    <div clasName="w-full h-screen ">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}


