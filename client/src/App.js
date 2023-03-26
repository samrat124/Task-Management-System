import './App.css';
import Allroutes from './components/Allroutes';
import Navbar from './Pages/Tasks/Navbar';
 
 
import Home from './Pages/Home/Home';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Allroutes/>
    </div>
  );
}

export default App;
