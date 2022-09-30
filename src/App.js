import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignupForm from "./components/SignupForm";
import Dashboard from "./components/Dashboard";
import AppNavbar from "./components/AppNavbar";
import Layout from "./components/Layout";


function App() {
  return (
    <div className="App">
      <Router>
        {/* <AppNavbar /> */}
        <Layout />
        <h1>Welcome to PetGram</h1>
        <Routes>
          <Route path="/">
            <Route element={<Dashboard />} path="/dashboard" />
            <Route element={<Login />} path="/login" />
            <Route element={<SignupForm />} path="/signupform" />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
