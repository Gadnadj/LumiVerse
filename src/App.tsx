import AppStore from './components/AppStore';
import Banner from './components/Banner';
import Banner2 from './components/Banner2';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import PopupPlayer from './components/PopupPlayer';
import Quotes from './components/Quotes';


function App() {

  return (
    <main className='overflow-x-hidden overflow-y-hidden bg-white dark:bg-black text-black dark:text-white duration-500'>
      <NavBar />
      <Hero />
      <Quotes />
      <Banner />
      <Banner2 />
      <Features />
      <AppStore />
      <Footer />

      {/* Video Player */}
      <PopupPlayer />
    </main>
  );
}

export default App;
