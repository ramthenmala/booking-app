import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import Layout from "./Components/Layout/Layout"

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
          path='*'
          element={<Navigate to='/' />}
        />
      </Routes>
    </Router>
  )
}

export default App
