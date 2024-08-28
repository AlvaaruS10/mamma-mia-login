import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import './App.css'
import Login from './components/Login';
import Register from './components/Register';
function App() {
  return (
    <div>
      <Navbar />
     {/* <Home /> */}
     {/*<Register/> */}
     <Login />
     <Footer />
    </div>
  );
}

export default App;