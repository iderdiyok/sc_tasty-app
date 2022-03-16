import './App.css';
import Footer from './Components/footer';
import Home from './Components/home';
import Navigation from './Components/navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
