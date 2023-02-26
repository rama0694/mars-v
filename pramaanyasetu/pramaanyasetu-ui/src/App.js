import { Routes, Route, Outlet, Link } from 'react-router-dom';


import SignIn from './pages/signIn';
import UserProfile from './pages/userProfile';
import NotFound from './pages/notFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/user" element={<UserProfile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
