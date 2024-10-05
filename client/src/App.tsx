import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import Layout from "./Components/Layout"
import Register from './pages/Register';
import SignIn from './pages/SignIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Layout >
            <p>Home Page</p>
          </Layout>}
        />
        <Route
          path='/search'
          element={<Layout >
            <p>Search</p>
          </Layout>}
        />
        <Route
          path='/register'
          element={
            <Layout>
              <Register />
            </Layout>}
        />
        <Route
          path='/signin'
          element={
            <Layout>
              <SignIn />
            </Layout>}
        />
        <Route
          path='*'
          element={<Navigate to='/' />}
        />
      </Routes>
    </Router>
  )
}

export default App
