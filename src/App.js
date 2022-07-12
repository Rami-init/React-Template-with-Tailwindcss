import { useState } from 'react';
import { Navbar, Hero, Features, Footer, Testimoniales, Cta } from './components'
function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className='w-full min-h-100vh flex flex-col'>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Hero />
      <Features />
      <Testimoniales />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
