import Login from './components/Login.js';
import Main from './components/Main.js';
import Profile from './components/Profile.js';
import Loading from './components/Loading.js';
import { Routes, Route } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

function App() {

  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    );
  }

  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
