import './App.css';
import Login from './components/Login';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to PetGram</h1>
      <p>A community for animal lovers to share photos of their pet.</p>
    </div>
  );
}

export default App;
