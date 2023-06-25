import { useState } from 'react';
import './App.css'
import Header from './components/Header'
import WebsiteIntro from './components/WebsiteIntro'
import AboutMe from './components/AboutMe';

function App() {
  const [isLoader, setIsLoader] = useState(true);

  return (
    <>
      {!isLoader && <Header isLoader={isLoader} />}
      <WebsiteIntro isLoader={isLoader} setIsLoader={setIsLoader} />
      {!isLoader && (
        <AboutMe />
      )}
    </>
  )
}

export default App
