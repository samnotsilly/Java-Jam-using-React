import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/home/Home";
import Nomatch from "./pages/nomatch/Nomatch";
import Jobs from "./pages/jobs/Jobs";
import Menu from "./pages/menu/Menu";
import Music from "./pages/music/Music";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="music" element={<Music />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="*" element={<Nomatch />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
