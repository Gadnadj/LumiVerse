import Hero from './components/Hero';
import NavBar from './components/NavBar';


function App() {

  return (
    <main className='overflow-x-hidden overflow-y-hidden bg-white dark:bg-black'>
      <NavBar />
      <Hero />
    </main>
  );
}

export default App;
