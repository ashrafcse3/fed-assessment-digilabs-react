import './App.css';
import Banner from './components/Home/Banner';
import BrandNames from './components/Home/BrandNames';
import Overview from './components/Home/Overview';
import Navbar from './components/shared/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <BrandNames />
      <Overview />
    </div>
  );
}

export default App;
