import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import TopHeader from "./components/layout/TopHeader";
import Navbar from "./components/layout/Navbar";
import Posts from "./pages/Posts";

function App() {
  let routes;
  let navbar;
  let isLoggedIn = false;
  if (!isLoggedIn) {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    );
    navbar = <TopHeader />;
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Posts />} />
      </Routes>
    );
    navbar = <Navbar/>;
  }

  return (
    <>
      {navbar}
      <Router>
        <main className={isLoggedIn && 'main'}>{routes}</main>
      </Router>
    </>
  );
}

export default App;
