import './App.css';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import PageNotFound from "./pages/PageNotFound";
import MemoryGame2 from "./components/MemoryGame2";
import MemoryGameOrigin from "./components/MemoryGameOrigin";


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
            <Route path="/game2" element={<MemoryGame2 />} />
            <Route path="/gameOrigin" element={<MemoryGameOrigin />} />
            {/*User processing*/}

          </Routes>
        </div>
      </Router>
  );
}

export default App;
