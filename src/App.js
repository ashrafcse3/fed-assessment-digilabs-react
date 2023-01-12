import './App.css';
import Banner from './components/Home/Banner';
import BrandNames from './components/Home/BrandNames';
import Navbar from './components/shared/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <BrandNames />
    </div>
  );
}

export default App;
