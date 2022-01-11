import './App.css';
import Banner from './components/Banner/Banner';
import Blogs from './components/Blogs/Blogs';
import Nav from './components/Nav/Nav';
import TopSection from './components/TopSection/TopSection';

function App() {
  return (
    <div>
      <TopSection />
      <Banner />
      <Nav />
      <Blogs />
    </div>
  );
}

export default App;
