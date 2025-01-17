import Banner from './components/Banner';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Quotes from './components/Quotes';


function App() {

  return (
    <main className='overflow-x-hidden overflow-y-hidden bg-white dark:bg-black text-black dark:text-white duration-500'>
      <NavBar />
      <Hero />
      <Quotes />
      <Banner />
    </main>
  );
}

export default App;
