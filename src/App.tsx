import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getVerse, randomizeVerse } from './bible/storage';
import LangBar from './components/LangBar';
import NavBar from './components/NavBar';
import FavPage from './pages/FavPage';
import HomePage from './pages/HomePage';

const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

const getRandomColor = () => colors[Math.floor(Math.random()*colors.length)]

function App() {
  const [color, setColor] = useState(getRandomColor())
  const [language, setLanguage] = useState('en')

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang)
  }

  return (
    <div id="app" style={{backgroundColor: color, transition: "all 1s ease"}} 
    className='min-h-screen w-screen flex justify-center font-bold items-center'
    >
      <NavBar color={color}/>
      <Routes>
        <Route path='/' element={<HomePage color={color} lang={language} setColor={setColor}/>}></Route>
        <Route path='/fav' element={<FavPage color={color} lang={language}/>}></Route>
      </Routes>
      <LangBar color={color} handleLanguageChange={handleLanguageChange} />
    </div>
  );
}

export default App;
