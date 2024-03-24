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
import MainAndTimeLevels from "./levels/MainAndTimeLevels";
import Login from "./user/Login";
import HomePage from "./pages/HomePage";
import TheGame from "./levels/TheGame";
import Register from "./user/Register";


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
            <Route path="/home" element={<HomePage />} />
            {/*Pages*/}
            <Route path="/game2" element={<MemoryGame2 />} />
            <Route path="/gameOrigin" element={<MemoryGameOrigin />} />
            <Route path="/game3" element={<MemoryGameThree />} />
            <Route path="/headerTest" element={<Header />} />
            <Route path="/page" element={<ChoseGameMode />} />

            <Route path="/game" element={<GamePage />} />
            {/*Levels*/}
            <Route path="/levels" element={<Levels />} />
            <Route path="/levels/main" element={<MainAndTimeLevels type="main" />} />
            <Route path="/levels/main/level" element={<TheGame timeTrial={false} />} />

            <Route path="/levels/time-trial" element={<MainAndTimeLevels type="time" />} />
            <Route path="/levels/time-trial/level" element={<TheGame timeTrial={true}/>} />
            {/*User processing*/}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

          </Routes>
        </div>
      </Router>
  );
}

export default App;
