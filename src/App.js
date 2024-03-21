import './App.css';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import PageNotFound from "./pages/PageNotFound";
import MemoryGame2 from "./components/MemoryGame2";
import MemoryGameOrigin from "./components/MemoryGameOrigin";
import MemoryGameThree from "./components/MemoryGameThree";
import Header from "./components/Header";
import ChoseGameMode from "./components/ChoseGameMode";
import GamePage from "./pages/GamePage";
import Levels from "./levels/Levels";
import MainLevels from "./levels/MainLevels";
import TimeTrial from "./levels/TimeTrial";
import MainLevelsGame3 from "./levels/MainLevelsGame3";


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
            <Route path="/game3" element={<MemoryGameThree />} />
            <Route path="/headerTest" element={<Header />} />
            <Route path="/page" element={<ChoseGameMode />} />

            <Route path="/game" element={<GamePage />} />
            {/*Levels*/}
            <Route path="/levels" element={<Levels />} />
            <Route path="/levels/main" element={<MainLevels />} />
            <Route path="/levels/main/level" element={<MainLevelsGame3 />} />

            <Route path="/levels/time-trial" element={<TimeTrial />} />
            {/*User processing*/}

          </Routes>
        </div>
      </Router>
  );
}

export default App;
