import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  let routes;
  let isLoggedIn = false;
  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    );
  }

  return (
    <Router>
      <main>{routes}</main>
    </Router>
  );
}

export default App;
