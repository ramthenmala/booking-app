import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import Layout from "./Components/Layout"
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import AddHotel from './pages/Hotel/AddHotel';
import { useAppContext } from './context/AppContext';

function App() {

  const { isLoggedIn } = useAppContext();

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
        {isLoggedIn && (
          <>
            <Route
              path='/add-hotel'
              element={
                <Layout>
                  <AddHotel />
                </Layout>}
            />

            <Route
              path='/my-hotels'
              element={
                <Layout>
                  <h1>My Htels</h1>
                </Layout>}
            />
          </>
        )}
        {/* <Route
          path='*'
          element={<Navigate to='/' />}
        /> */}
      </Routes>
    </Router>
  )
}

export default App
