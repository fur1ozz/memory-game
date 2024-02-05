import './App.css';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import PageNotFound from "./pages/PageNotFound";


function App() {
  return (
      <Router>
        <div className="min-h-screen dark:bg-[#1d2125]">
          <Routes>
            <Route
                path="/"
                element={<Navigate to="/home" />}
            />
            <Route
                path="*"
                element={<PageNotFound />}
            />
            {/*Pages*/}

            {/*User processing*/}

          </Routes>
        </div>
      </Router>
  );
}

export default App;
