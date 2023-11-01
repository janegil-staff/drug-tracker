import { BrowserRouter as Router, Route, Routes, BrowserRouter, useNavigation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import TopHeader from "./components/layout/TopHeader";
import Navbar from "./components/layout/Navbar";
import Posts from "./pages/Posts";
import { AuthContext } from "./context/auth-context";
import { useAuth } from "./hooks/auth-hook";
import Entries from "./pages/Entries";

function App() {
  const { token, login, logout, userId} = useAuth();

  let routes;
  let navbar;

  if (token) {
    routes = (
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/entries" element={<Entries />} />
      </Routes>
    );
    navbar = <Navbar />;
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    );
    navbar = <TopHeader />;
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
       <Router>
      {navbar}
     
        <main className={!token && "main"}>{routes}</main>
        </Router> 
 
    </AuthContext.Provider>
  );
}

export default App;
